import {
	Box,
	Grid,
	IconButton,
	Stack,
	Tab,
	Tabs,
	Typography,
} from "@mui/material";
import { CaretLeft, X } from "phosphor-react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./conversation/MsgTypes";

const SharedMessages = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				width: 320,
				height: "100vh",
				backgroundColor:
					theme.palette.mode === "light"
						? "#f8faff"
						: theme.palette.background.paper,
			}}
		>
			<Stack sx={{ height: "100%" }}>
				<Box
					sx={{
						boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
						width: "100%",
						backgroundColor:
							theme.palette.mode === "light"
								? "#f8faff"
								: theme.palette.background.paper,
					}}
				>
					<Stack
						direction="row"
						alignItems={"center"}
						spacing={3}
						sx={{ height: "100%", p: 2 }}
					>
						<IconButton
							onClick={() => {
								dispatch(UpdateSidebarType("CONTACT"));
							}}
						>
							<CaretLeft />
						</IconButton>
						<Typography variant="subtitle2">Shared Messages</Typography>
					</Stack>
				</Box>

				{/* tabs */}

				<Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handleChange} centered>
					<Tab label="Media" />
					<Tab label="Links" />
					<Tab label="Docs" />
				</Tabs>

				{/* Body */}
				<Stack
					sx={{
						height: "100%",
						position: "relative",
						flexGrow: 1,
						overflowY: "scroll",
					}}
					p={3}
					spacing={value === 1 ? 1 : 3}
				>
					{(() => {
						switch (value) {
							case 0:
								//images
								return (
									<Grid container spacing={2}>
										{[1, 2, 3, 4, 5, 6].map((el) => {
											return (
												<Grid item xs={4}>
													<img src={faker.image.avatar()} alt={faker.name.fullName()} />
												</Grid>
											);
										})}
									</Grid>
								);
								break;
							case 1:
								//links
								return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
							case 2:
								//docs
								return SHARED_DOCS.map((el) => <DocMsg el={el} />);
						}
					})()}
				</Stack>
			</Stack>
		</Box>
	);
};

export default SharedMessages;