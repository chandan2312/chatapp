import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import {
	Alert,
	Button,
	IconButton,
	Input,
	InputAdornment,
	Link,
	Stack,
} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";

const LoginForm = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const LoginSchema = Yup.object().shape({
		email: Yup.string().email("Email is invalid").required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const dafaultValues = {
		email: "demo@domain.com",
		password: "demo1234",
	};

	const methods = useForm({
		defaultValues: dafaultValues,
		resolver: yupResolver(LoginSchema),
	});

	const {
		reset,
		setError,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isSubmitting },
	} = methods;

	const onSubmit = async (data) => {
		try {
			//submit to db
		} catch (error) {
			console.log(error);
			reset();
			setError("afterSubmit", {
				...error,
				message: error.message,
			});
		}
	};

	return (
		<>
			<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!!errors.afterSubmit && (
						<Alert severity="error">{errors.afterSubmit.message}</Alert>
					)}

					<RHFTextField name="email" label="Email Address" />
					<RHFTextField
						name="password"
						label="Password"
						type={showPassword ? "text" : "password"}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={() => {
											setShowPassword(!showPassword);
										}}
									>
										{showPassword ? <Eye /> : <EyeSlash />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Stack>

				<Stack alignItems="flex-end" sx={{ my: 2 }}>
					<Link
						component={RouterLink}
						to="/auth/reset-password"
						variant="body2"
						color="inherit"
						underline="always"
					>
						Forgot Password?
					</Link>
				</Stack>

				<Button
					fullWidth
					color="inherit"
					size="large"
					type="submit"
					variant="contained"
					sx={{
						bgcolor: "text.primary",
						color: (theme) =>
							theme.palette.mode === "light" ? "common.white" : "grey.800",
						"&:hover": {
							bgcolor: "text.primary",
							color: (theme) =>
								theme.palette.mode === "light" ? "common.white" : "grey.700",
						},
					}}
				>
					Login
				</Button>
			</FormProvider>
		</>
	);
};

export default LoginForm;
