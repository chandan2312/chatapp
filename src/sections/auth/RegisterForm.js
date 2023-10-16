import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import FormProvider from "../../components/hook-form/FormProvider";
import {
	Alert,
	Button,
	IconButton,
	InputAdornment,
	Stack,
} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";

const RegisterForm = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const RegisterSchema = Yup.object().shape({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		email: Yup.string().email("Email is invalid").required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const dafaultValues = {
		firstName: "",
		lastName: "",
		email: "demo@domain.com",
		password: "demo1234",
	};

	const methods = useForm({
		defaultValues: dafaultValues,
		resolver: yupResolver(RegisterSchema),
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

					<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
						<RHFTextField name="firstName" label="First Name" />
						<RHFTextField name="lastName" label="Last Name" />
					</Stack>

					<RHFTextField name="email" label="Email" />
					<RHFTextField
						name="password"
						label="Create Paasword"
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
						Register
					</Button>
				</Stack>
			</FormProvider>
		</>
	);
};

export default RegisterForm;
