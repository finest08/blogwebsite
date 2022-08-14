import React from 'react';

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';

export const Hero = ({ content }) => {
    switch (content.direction) {
        case "left":
            return <Left content={content} />
        case "right":
            return <Right content={content} />
        case "center":
            return <Center content={content} />
        default:
            return <Left content={content} />
    }
}

const Left = ({ content }) => {
    return (
        <Container sx={{ mt: 5, mb: 10 }}>
            <Typography align="left" variant="h1" color='primary.main'>{content.heroPrimary}</Typography>
            <Typography align="left" variant="h2" color='primary.main'>{content.heroSecondary}</Typography>
            <Typography align="left" variant="subtitle2" color='primary.main' sx={{ mb: 5 }}>{content.altHeader}</Typography>
            <Typography align="left" variant="body1" color='primary.main' sx={{ mb: 0.5 }}>{content.heroSubHeader}</Typography>
        </Container >
    )
}
Left.propTypes = {
    content: PropTypes.object,
};

const Right = ({ content }) => {
    return (
        <Container sx={{ mt: 5, mb: 10 }}>
            <Typography align="right" variant="h1" color='primary.main'>{content.heroPrimary}</Typography>
            <Typography align="right" variant="h2" color='primary.main'>{content.heroSecondary}</Typography>
            <Typography align="right" variant="subtitle2" color='primary.main' sx={{ mb: 5 }}>{content.altHeader}</Typography>
            <Typography align="right" variant="body1" color='primary.main' sx={{ mb: 0.5 }}>{content.heroSubHeader}</Typography>
        </Container >
    )
}
Right.propTypes = {
    content: PropTypes.object,
};

const Center = ({ content }) => {
    return (
        <Container sx={{ mt: 5, mb: 10 }}>
            <Typography align="center" variant="h2" color='primary.main'>{content.heroPrimary}</Typography>
            <Typography align="center" variant="h2" color='primary.main'>{content.heroSecondary}</Typography>
            <Typography align="center" variant="subtitle2" color='primary.main' sx={{ mb: 5 }}>{content.altHeader}</Typography>
            <Typography align="center" variant="body1" color='primary.main' sx={{ mb: 0.5 }}>{content.heroSubHeader}</Typography>
        </Container>
    )
}
Center.propTypes = {
    content: PropTypes.object,
};

export default Hero


