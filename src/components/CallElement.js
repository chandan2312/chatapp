import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBadge";
import {
	ArrowDownLeft,
	ArrowDownRight,
	ArrowUpRight,
	Phone,
	VideoCamera,
} from "phosphor-react";

const CallLogElement = ({ online, incoming, missed }) => {
	return (
		<>
			<Box
				p={2}
				sx={{
					width: "100%",
					borderRadius: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? "#fff"
							: theme.palette.background.default,
				}}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					fullWidth
				>
					<Stack direction="row" alignItems={"center"} spacing={2}>
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
						<Stack>
							<Typography variant="subtitle2">{faker.name.fullName()}</Typography>

							<Stack direction="row" spacing={1} alignItems={"center"}>
								{incoming ? (
									<ArrowDownLeft color={missed ? "red" : "green"} />
								) : (
									<ArrowUpRight color={missed ? "red" : "green"} />
								)}
								<Typography variant="caption">Yesterday 21.24</Typography>
							</Stack>
						</Stack>
					</Stack>
					<IconButton>
						<Phone size={22} color="green" />
					</IconButton>
				</Stack>
			</Box>
		</>
	);
};

const CallElement = ({ online }) => {
	return (
		<>
			<Box
				p={2}
				sx={{
					width: "100%",
					borderRadius: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? "#fff"
							: theme.palette.background.default,
				}}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					fullWidth
				>
					<Stack direction="row" alignItems={"center"} spacing={2}>
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
						<Stack>
							<Typography variant="subtitle2">{faker.name.fullName()}</Typography>
						</Stack>
					</Stack>
					<Stack direction="row" alignItems="center">
						<IconButton>
							<Phone size={22} color="green" />
						</IconButton>
						<IconButton>
							<VideoCamera color="green" />
						</IconButton>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

export { CallElement, CallLogElement };
