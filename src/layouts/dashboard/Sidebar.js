import React from "react";
import { useTheme } from "@mui/material/styles";
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Gear } from "phosphor-react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import { faker } from "@faker-js/faker";
import Logo from "../../assets/Images/logo.ico";
import AntSwitch from "./AntSwitch";

const Sidebar = () => {
	const [selected, settSelected] = useState(0);
	const { onToggleMode } = useSettings();

	const theme = useTheme();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box
			p={2}
			sx={{
				backgroundColor:
					theme.palette.mode === "light"
						? "#F0F4FA"
						: theme.palette.background.paper,
				boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
				height: "100vh",
				width: 100,
				display: "block",
				float: "left",
			}}
		>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="space-between"
				sx={{ height: "100%" }}
				spacing={3}
			>
				<Stack sx={{ alignItems: "center" }} spacing={4}>
					<Link component={RouterLink} to="/app">
						<Box
							sx={{
								backgroundColor: theme.palette.primary.main,
								height: 64,
								width: 64,
								borderRadius: 1.5,
							}}
						>
							<img src={Logo} alt="Chat App Logo" />
						</Box>
					</Link>
					<Stack
						sx={{ width: "max-content" }}
						direction="column"
						alignItems="center"
						spacing={3}
					>
						{Nav_Buttons.map((el) =>
							el.index === selected ? (
								<Box
									sx={{
										backgroundColor: theme.palette.primary.main,
										borderRadius: 1.5,
									}}
								>
									<IconButton
										onClick={() => settSelected(el.index)}
										key={el.index}
										sx={{ width: "max-content", color: "white" }}
									>
										{el.icon}
									</IconButton>
								</Box>
							) : (
								<IconButton
									onClick={() => settSelected(el.index)}
									key={el.index}
									sx={{
										width: "max-content",
										color:
											theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
									}}
								>
									{el.icon}
								</IconButton>
							)
						)}
						<Divider sx={{ width: "48px" }} />
						{selected === 3 ? (
							<Box
								sx={{
									backgroundColor: theme.palette.primary.main,
									borderRadius: 1.5,
								}}
							>
								<Link component={RouterLink} to="/settings">
									<IconButton
										onClick={() => settSelected(3)}
										sx={{ width: "max-content", color: "#fff" }}
									>
										<Gear />
									</IconButton>
								</Link>
							</Box>
						) : (
							<Link component={RouterLink} to="/settings">
								<IconButton
									component={RouterLink}
									to="/settings"
									sx={{
										width: "max-content",
										color:
											theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
									}}
									onClick={() => settSelected(3)}
								>
									<Gear />
								</IconButton>
							</Link>
						)}
					</Stack>
				</Stack>

				<Stack spacing={4}>
					<AntSwitch
						onChange={() => {
							onToggleMode();
						}}
						defaultCheccked
					/>
					<Avatar
						id="basic-button"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
						src={faker.image.avatar()}
					/>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
						anchorOrigin={{ horizontal: "left", vertical: "top" }}
						transformOrigin={{ horizontal: "left", vertical: "bottom" }}
					>
						<Stack spacing={1} px={1}>
							{Profile_Menu.map((el) => (
								<MenuItem>
									<Stack
										sx={{ width: 100 }}
										direction="row"
										alignItems={"center"}
										justifyContent="space-between"
									>
										<span>{el.title}</span>
										{el.icon}
									</Stack>
								</MenuItem>
							))}
						</Stack>
					</Menu>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Sidebar;
