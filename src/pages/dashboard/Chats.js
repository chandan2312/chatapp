import {
	Box,
	IconButton,
	Stack,
	Typography,
	InputBase,
	Button,
	Divider,
	Avatar,
	Badge,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

const ChatElement = ({ id, name, msg, time, unread, online }) => {
	const theme = useTheme();

	return (
		<>
			<Box
				p={2}
				sx={{
					width: "100%",
					borderRadius: 1,
					backgroundColor:
						theme.palette.mode === "light"
							? "#fff"
							: theme.palette.background.default,
				}}
			>
				<Stack direction="row" alignItems={"center"} justifyContent="space-between">
					<Stack direction="row" spacing={2} sx={{ width: "100%" }}>
						<div>
							{online ? (
								<StyledBadge
									overlap="circular"
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
									variant="dot"
								>
									<Avatar src={faker.image.avatar()} />
								</StyledBadge>
							) : (
								<Avatar src={faker.image.avatar()} />
							)}
						</div>

						<Stack spacing={0.3} sx={{ width: "100%" }}>
							<Typography variant="subtitle2">{name}</Typography>
							<Typography variant="caption">{msg}</Typography>
						</Stack>

						<Stack spacing={2} alignItems="center" direction="column">
							<Typography sx={{ fontWeight: 600 }} variant="caption">
								{time}
							</Typography>
							<Badge badgeContent={unread} color="primary">
								{/* <CircleDashed size={24} /> */}
							</Badge>
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.background.default, 1),
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: "100%",
	},
}));

const Chats = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: "relative",
				width: 340,
				backgroundColor:
					theme.palette.mode === "light"
						? "#f8faff"
						: theme.palette.background.paper,
				boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
			}}
		>
			<Stack p={3} spacing={2} sx={{ height: "100vh" }}>
				<Stack
					direction="row"
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Typography variant="h5">Chats</Typography>
					<IconButton>
						<CircleDashed />
					</IconButton>
				</Stack>

				<Stack sx={{ width: "100%" }}>
					<Search>
						<SearchIconWrapper>
							<MagnifyingGlass color="#709ce6" />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
						/>
					</Search>
				</Stack>

				<Stack spacing={1}>
					<Stack direction="row" alignItems={"center"} spacing={1.5}>
						<ArchiveBox size={24} />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>

				<Stack
					direction="column"
					sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
				>
					<SimpleBarStyle timeout={500} clickOnTrack={false}>
						<Stack spacing={2}>
							<Typography sx={{ color: "#676767" }} variant="subtitle1">
								Pinned
							</Typography>
							{ChatList.filter((el) => el.pinned).map((el) => {
								return <ChatElement {...el} key={el.id} />;
							})}
						</Stack>

						<Stack spacing={2} sx={{ marginTop: "16px" }}>
							<Typography sx={{ color: "#676767" }} variant="subtitle1">
								All Chats
							</Typography>
							{ChatList.filter((el) => !el.pinned).map((el) => {
								return <ChatElement {...el} key={el.id} />;
							})}
						</Stack>
					</SimpleBarStyle>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
