import React from 'react';

import ReactMarkdown from "react-markdown";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';

export const Content = ({ content }) => {
    return (
        <Box sx={{ mt: 2, mb: 25 }}>
            <Container sx={{ p: 5 }}>
                <Typography variant='h3' color='primary.main'>{content.header}</Typography>
                <Typography color='primary.main'>
                    <ReactMarkdown color='primary.main' children={content.description} />
                </Typography>
            </Container>
        </Box>
    )
}
Content.propTypes = {
    content: PropTypes.object,
};
