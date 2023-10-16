import React from "react";
import {
	Avatar,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	IconButton,
	Slide,
	Stack,
	Typography,
} from "@mui/material";
import {
	Bell,
	CaretRight,
	Phone,
	Prohibit,
	Star,
	Trash,
	VideoCamera,
	X,
} from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>{"Are you Sure to Block this contact?"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Yes</Button>
			</DialogActions>
		</Dialog>
	);
};

const DeleteDialog = ({ open, handleClose }) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>{"Delete This Chat?"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Yes</Button>
			</DialogActions>
		</Dialog>
	);
};

const Contact = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const [openBlock, setOpenBlock] = React.useState(false);
	const [openDelete, setOpenDelete] = React.useState(false);

	const handleCloseBlock = () => {
		setOpenBlock(false);
	};
	const handleCloseDelete = () => {
		setOpenDelete(false);
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
				{/* Header */}
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
						justifyContent={"space-between"}
						spacing={3}
						sx={{ height: "100%", p: 2 }}
					>
						<Typography variant="subtitle2">Contact Info</Typography>
						<IconButton
							onClick={() => {
								dispatch(ToggleSidebar());
							}}
						>
							<X />
						</IconButton>
					</Stack>
				</Box>

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
					<Stack alignItems={"center"} direction="row" spacing={2}>
						<Avatar
							src={faker.image.avatar()}
							alt={faker.name.firstName()}
							sx={{ height: 64, width: 64 }}
						/>

						<Stack spacing={0.5}>
							<Typography variant="article" fontWeight={600}>
								{faker.name.fullName()}
							</Typography>
							<Typography variant="body2" fontWeight={500}>
								{"+91 8485017650"}
							</Typography>
						</Stack>
					</Stack>

					<Stack direction="row" alignItems="center" justifyContent="space-evenly">
						<Stack spacing={1} alignItems="center">
							<IconButton>
								<Phone />
							</IconButton>

							<Typography variant="overline">Voice</Typography>
						</Stack>

						<Stack spacing={1} alignItems="center">
							<IconButton>
								<VideoCamera />
							</IconButton>

							<Typography variant="overline">Video</Typography>
						</Stack>
					</Stack>

					<Divider />

					{/* About */}
					<Stack spacing={0.5}>
						<Typography variant="article">About</Typography>
						<Typography variant="body2">Hii there, I am using Chatapp</Typography>
					</Stack>
					<Divider />

					{/* Media */}
					<Stack
						direction="row"
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Typography variant="subtitle2">Media, Links & Docs</Typography>
						<Button
							onClick={() => {
								dispatch(UpdateSidebarType("SHARED"));
							}}
							endIcon={<CaretRight />}
						>
							406
						</Button>
					</Stack>

					<Stack direction="row" spacing={2} alignItems="center">
						{[1, 2, 3].map((el) => (
							<Box>
								<img src={faker.image.food()} alt={faker.name.fullName()}></img>
							</Box>
						))}
					</Stack>

					<Divider />

					{/* Starred Messages */}
					<Stack
						direction="row"
						alignItems={"center"}
						justifyContent="space-between"
					>
						<Stack direction="row" spacing={2}>
							<Star size={21} />
							<Typography variant="subtitle2">Starred Messages</Typography>
						</Stack>

						<IconButton
							onClick={() => {
								dispatch(UpdateSidebarType("STARRED"));
							}}
						>
							<CaretRight />
						</IconButton>
					</Stack>
					<Divider />

					{/* Muted Notification Toggle */}

					<Stack
						direction="row"
						alignItems={"center"}
						justifyContent="space-between"
					>
						<Stack direction="row" spacing={2}>
							<Bell size={21} />
							<Typography variant="subtitle2">Mute Notifications</Typography>
						</Stack>

						<AntSwitch />
					</Stack>
					<Divider />

					{/* Shared Groups */}
					<Typography variant="article">1 group in common</Typography>

					<Stack direction="row" spacing={2} alignItems="center">
						<Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
						<Stack spacing={0.5}>
							<Typography variant="subtitle2">Group 1</Typography>
							<Typography variant="caption">Lion, Tiger, Bear, Snake</Typography>
						</Stack>
					</Stack>

					{/* Buttons */}
					<Stack direction="row" alignItems="center" spacing={2}>
						<Button
							onClick={() => {
								setOpenBlock(true);
							}}
							startIcon={<Prohibit />}
							fullWidth
							variant="outlined"
						>
							Block
						</Button>
						<Button
							onClick={() => {
								setOpenDelete(true);
							}}
							startIcon={<Trash />}
							fullWidth
							variant="outlined"
						>
							Delete
						</Button>
					</Stack>
				</Stack>
			</Stack>

			{/* Dialogs */}
			{openBlock && (
				<BlockDialog open={openBlock} handleClose={handleCloseBlock} />
			)}
			{openDelete && (
				<DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
			)}
		</Box>
	);
};

export default Contact;
