import React from 'react';

import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';

export const Hero = ({ content }) => {
    const left = () => {
        if (content.direction === null) {
            return 'Left'
        }
        if (content.direction === 'Left') {
            return 'Left'
        }
    }
    const direction = left()

    return (
        <Container sx={{ p: 5 }}>
            {direction && <Left content={content} />}
            {content.direction === 'Center' && <Centerd content={content} />}
        </Container>
    )
}

const Left = ({ content }) => {
    return (
        <Box sx={{ mt: 10 }}>
            <Typography variant="h2" color='primary.main'>{content.heroPrimary}</Typography>
            <Typography variant="h2" color='primary.main'>{content.heroSecondary}</Typography>
            <Typography variant="subtitle2" color='primary.main' sx={{ mb: 5 }}>{content.altHeader}</Typography>
            <Typography variant="body1" color='primary.main' sx={{ mb: 0.5 }}>{content.heroSubHeader}</Typography>
        </Box >
    )
}
Left.propTypes = {
    content: PropTypes.object,
};

const Centerd = ({ content }) => {
    return (
        <Box sx={{ mt: 10 }}>
            <Typography variant="h2" color='primary.main'>{content.heroPrimary}</Typography>
            <Typography variant="h2" color='primary.main'>{content.heroSecondary}</Typography>
            <Typography variant="subtitle2" color='primary.main' sx={{ mb: 5 }}>{content.altHeader}</Typography>
            <Typography variant="body1" color='primary.main' sx={{ mb: 0.5 }}>{content.heroSubHeader}</Typography>
        </Box>
    )
}
Centerd.propTypes = {
    content: PropTypes.object,
};

export default Hero


