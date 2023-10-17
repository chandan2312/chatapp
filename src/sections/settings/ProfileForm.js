import React, { useCallback } from "react";
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

const ProfileForm = () => {
	const LoginSchema = Yup.object().shape({
		name: Yup.string().required("Name is Required"),
		about: Yup.string().required("About Info Required"),
		avatarUrl: Yup.string().required("Avatar is required").nullable(true),
	});

	const dafaultValues = {
		name: "",
		about: "",
	};

	const methods = useForm({
		defaultValues: dafaultValues,
		resolver: yupResolver(LoginSchema),
	});

	const {
		reset,
		watch,
		control,
		setError,
		setValue,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isSubmitting },
	} = methods;

	const values = watch();

	const handleDrop = useCallback(
		(acceptedFiles) => {
			const file = acceptedFiles[0];

			const newFile = Object.assign(file, {
				preview: URL.createObjectURL(file),
			});

			if (file) {
				setValue("avatarUrl", newFile, { shouldValidate: true });
			}
		},
		[setValue]
	);

	const onSubmit = async (data) => {
		try {
			//submit to db
			console.log(data);
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
					{/* Name & About */}
					<Stack spacing={3}>
						{!!errors.afterSubmit && (
							<Alert severity="error">{errors.afterSubmit.message}</Alert>
						)}

						<RHFTextField
							name="name"
							label="Name"
							helperText={"This name is visible to your contacts"}
						/>
						<RHFTextField multiline rows={4} maxRows={5} name="about" label="About" />
					</Stack>

					<Stack direction="row" justifyContent={"end"}>
						<Button color="primary" size="large" type="submit" variant="outlined">
							Save
						</Button>
					</Stack>
				</Stack>
			</FormProvider>
		</>
	);
};

export default ProfileForm;
