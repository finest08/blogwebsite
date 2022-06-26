import React from 'react';

import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import ReactMarkdown from "react-markdown";

import { Typography } from '@mui/material';

export const Post = (props) => {
    const { content } = props;
    return (
        <Stack sx={{ py: 8 }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "left" }} >
                <Typography variant="h3" color='primary.main'>{content.header}</Typography>
                <Typography color='primary.main'>
                    <ReactMarkdown color='primary.main' children={content.description} />
                </Typography>
            </Container>
        </Stack >
    )
}
export default Post;
