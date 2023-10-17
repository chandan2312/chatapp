import {
	Box,
	IconButton,
	Stack,
	Typography,
	Button,
	Divider,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";

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
					spacing={2}
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
