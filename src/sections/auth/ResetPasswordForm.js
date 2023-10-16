import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const ResetPasswordForm = () => {
	const ResetPasswordSchema = Yup.object().shape({
		email: Yup.string().email("Email is invalid").required("Email is required"),
	});

	const dafaultValues = {
		email: "demo@domain.com",
	};

	const methods = useForm({
		defaultValues: dafaultValues,
		resolver: yupResolver(ResetPasswordSchema),
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
						Send Reset Request
					</Button>
				</Stack>
			</FormProvider>
		</>
	);
};

export default ResetPasswordForm;
