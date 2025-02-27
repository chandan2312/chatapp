import { Box, Stack, TextField } from "@mui/material";
import React from "react";
// import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
	const theme = useTheme();
	return (
		<Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
			<Header />
			{/* Chat */}
			<Box
				width={"100%"}
				sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
			>
				<Message />
			</Box>
			<Footer />
		</Stack>
	);
};

export default Conversation;
