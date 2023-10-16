import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
	return (
		<>
			<Stack
				spacing={2}
				sx={{ mb: 5, position: "relative" }}
				justifyContent={"center"}
			>
				<Typography variant="h4" sx={{ textAlign: "center" }}>
					Get Started With ChatApp
				</Typography>
				<Stack direction="row" spacing={0.5} alignItems={"center"}>
					<Typography variant="body2">Already have an account?</Typography>
					<Link component={RouterLink} to="/auth/login" variant="subtitle2">
						Sign in
					</Link>
				</Stack>

				{/* Register Form */}
				<RegisterForm />

				<Typography
					component={"div"}
					sx={{
						color: "text.secondary",
						mt: 3,
						typography: "caption",
						textAlign: "center",
					}}
				>
					I Agree to the{" "}
					<Link
						component={RouterLink}
						to="#"
						color="text.primary"
						underline="always"
					>
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						component={RouterLink}
						to="#"
						color="text.primary"
						underline="always"
					>
						Privacy Policy
					</Link>
				</Typography>

				{/* Auth Social */}

				<AuthSocial />
			</Stack>
		</>
	);
};

export default Register;
