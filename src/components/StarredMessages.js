import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft, X } from "phosphor-react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import Message from "./conversation/Message";

const StarredMessages = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

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
						<Typography variant="subtitle2">Starred Messages</Typography>
					</Stack>
				</Box>

				{/* tabs */}

				{/* Body */}
				<Stack
					sx={{
						height: "100%",
						position: "relative",
						flexGrow: 1,
						overflowY: "scroll",
					}}
					p={3}
					spacing={3}
				>
					<Message />
				</Stack>
			</Stack>
		</Box>
	);
};

export default StarredMessages;
