import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Slide,
	Stack,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/hook-form/FormProvider";

import * as Yup from "yup";
import { RHFTextField } from "../../components/hook-form";
import RHFAutoComplete from "../../components/hook-form/RHFAutoComplete";

const MEMBERS = ["Name1", "Name2", "Name3"];

//TODO - Make it reusable
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

//Form Component

const CreateGroupForm = ({ handleClose }) => {
	const NewGroupSchema = Yup.object().shape({
		title: Yup.string().required("Title is required"),
		members: Yup.array()
			.min(2, "Select at least 2 members")
			.required("Select at least 2 members"),
	});

	const defaultValues = {
		title: "",
		members: [],
	};

	const methods = useForm({
		defaultValues: defaultValues,
		resolver: yupResolver(NewGroupSchema),
	});

	const {
		reset,
		watch,
		setError,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
	} = methods;

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
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				<RHFTextField name="title" label="Title" />
				<RHFAutoComplete
					name="members"
					label="Members"
					multiple
					freeSolo
					options={MEMBERS.map((option) => option)}
					ChipProps={{ size: "medium" }}
				/>

				<Stack
					spacing={2}
					direction="row"
					alignItems="center"
					justifyContent={"end"}
				>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit" variant="contained">
						Create
					</Button>
				</Stack>
			</Stack>
		</FormProvider>
	);
};

const CreateGroup = ({ open, handleClose }) => {
	return (
		<>
			<Dialog
				fullWidth
				maxWidth="xs"
				open={open}
				TransitionComponent={Transition}
				keepMounted
				sx={{ p: 3 }}
			>
				{/* Title  */}
				<DialogTitle sx={{ mb: 3 }}>Create a new group</DialogTitle>
				{/* Content */}
				<DialogContent>
					{/* Form */}
					<CreateGroupForm handleClose={handleClose} />
				</DialogContent>
			</Dialog>
		</>
	);
};

export default CreateGroup;
