import { Divider, IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
	return (
		<div>
			<Divider
				sx={{
					my: 2.5,
					typography: "overline",
					color: "text.disabled",
					"&::before, ::after": {
						borderTopStyle: "dashed",
					},
				}}
			>
				OR
			</Divider>
			<Stack direction="row" justifyContent="center" spacing={4}>
				<IconButton>
					<GoogleLogo size={30} color="#df3e30" />
				</IconButton>
				<IconButton color="inherit">
					<GithubLogo size={30} />
				</IconButton>
				<IconButton>
					<TwitterLogo size={30} color="#1c9cea" />
				</IconButton>
			</Stack>
		</div>
	);
};

export default AuthSocial;
