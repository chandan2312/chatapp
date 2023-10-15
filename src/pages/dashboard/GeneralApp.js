import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";
import { useTheme } from "@mui/material/styles";

// lazy load the cat component

const GeneralApp = () => {
	const theme = useTheme();
	return (
		<Stack direction={"row"} sx={{ width: "100%" }}>
			<Chats />
			<Box
				sx={{
					height: "100%",
					width: "calc(100vw - 440px)",
					backgroundColor:
						theme.palette.mode === "light"
							? "#f0f4fa"
							: theme.palette.background.default,
				}}
			>
				<Conversation />
			</Box>
		</Stack>
	);
};

export default GeneralApp;
