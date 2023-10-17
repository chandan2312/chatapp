import {
	Box,
	Divider,
	IconButton,
	Link,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
	const theme = useTheme();

	const [openDialog, setOpenDialog] = React.useState(false);

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	return (
		<>
			<Stack direction="row" sx={{ width: "100%" }}>
				{/* Left Panel */}
				<Box
					sx={{
						height: "100vh",
						width: 320,
						boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)",
						backgroundColor: (theme) =>
							theme.palette.mode === "light" ? "#f8faff" : theme.palette.background,
					}}
				>
					<Stack p={3} spacing={2} sx={{ height: "100vh" }}>
						<Stack>
							<Typography variant="h5">Call Logs</Typography>
						</Stack>

						{/* Search bar */}
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

						<Stack
							direction="row"
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Typography variant="subtitle1" component={Link}>
								Start Conversation
							</Typography>
							<IconButton onClick={() => setOpenDialog(true)}>
								<Plus style={{ color: theme.palette.primary.main }} />
							</IconButton>
						</Stack>

						<Divider />

						<Stack
							spacing={2}
							sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
						>
							<SimpleBarStyle timeout={500} clickOnTrack={false}>
								<Stack spacing={2}>
									<Typography sx={{ color: "#676767" }} variant="subtitle1">
										History
									</Typography>

									{/* Call Logs */}
									{CallLogs.map((el) => (
										<CallLogElement {...el} />
									))}
								</Stack>
							</SimpleBarStyle>
						</Stack>
					</Stack>
				</Box>
				{/* Right Panel */}

				{/* Todo - Reuse conversation component */}
			</Stack>

			{openDialog && (
				<StartCall open={openDialog} handleClose={handleCloseDialog} />
			)}
		</>
	);
};

export default Call;
