import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

// lazy load the cat component

const GeneralApp = () => {
	const theme = useTheme();
	const { sidebar } = useSelector((store) => store.app);

	return (
		<Stack direction={"row"} sx={{ width: "100%" }}>
			<Chats />
			<Box
				sx={{
					height: "100%",
					width: sidebar.open ? "calc(100vw - 760px)" : "calc(100vw - 440px)",
					backgroundColor:
						theme.palette.mode === "light"
							? "#f0f4fa"
							: theme.palette.background.default,
				}}
			>
				<Conversation />
			</Box>

			{/* contact */}
			{sidebar.open &&
				(() => {
					switch (sidebar.type.type) {
						case "CONTACT":
							return <Contact />;

						case "SHARED":
							return <SharedMessages />;

						case "STARRED":
							return <StarredMessages />;

						default:
							break;
					}
				})()}
		</Stack>
	);
};

export default GeneralApp;
