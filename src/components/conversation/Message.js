import React from "react";
import { Chat_History } from "../../data";
import {
	MediaMsg,
	TextMsg,
	ReplyMsg,
	Timeline,
	LinkMsg,
	DocMsg,
} from "./MsgTypes";
import { Box, Stack } from "@mui/material";

const Message = () => {
	return (
		<Box p={3}>
			<Stack direction="column" spacing={3}>
				{Chat_History.map((el) => {
					switch (el.type) {
						case "divider":
							return <Timeline el={el} />;

						case "msg":
							switch (el.subtype) {
								default:
									return <TextMsg el={el} />;
									break;
								case "img":
									return <MediaMsg el={el} />;
									break;
								case "doc":
									return <DocMsg el={el} />;
									break;
								case "link":
									return <LinkMsg el={el} />;
									break;
								case "reply":
									return <ReplyMsg el={el} />;
									break;

								// Pass el prop to TextMsg component
							}
							break;
						default:
							return <></>;
							break;
					}
				})}
			</Stack>
		</Box>
	);
};

export default Message;
