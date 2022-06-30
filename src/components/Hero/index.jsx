import React from 'react';

import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
        <Box>
            <Container maxWidth="lg" >
                {direction && <Left content={content} />}
                {content.direction === 'Center' && <Centerd content={content} />}
            </Container>
        </Box>
    )
}

const Left = ({ content }) => {
    return (
        <Grid
            container
            justifyContent="center"
            direction={{ xs: 'column-reverse' }}
            spacing={2}
        >
            <Grid item xs={12} md={6}>
                <Stack sx={{ mt: 5 }}>
                    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "left" }} >
                        <Typography variant="h2" color='primary.main'>{content.heroPrimary}</Typography>
                        <Typography variant="h2" color='primary.main'>{content.heroSecondary}</Typography>
                        <Typography variant="subtitle2" color='primary.main' sx={{ mb: 2 }}>{content.altHeader}</Typography>
                        <Typography variant="body1" color='primary.main' sx={{ mb: 10 }}>{content.heroSubHeader}</Typography>
                    </Container>
                </Stack >
                {/* <Box sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
                    {content.image.url &&
                        <CardMedia component="img" sx={{ maxWidth: '25rem' }}
                            image={content.image.url} alt={content.image.alt} />
                    }
                </Box> */}
            </Grid>
        </Grid >
    )
}
Left.propTypes = {
    // content: PropTypes.func,
    content: PropTypes.object,
};

const Centerd = ({ content }) => {
    return (
        <Stack sx={{ mt: 5 }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} >
                <Typography variant="h2" color='primary.main'>{content.heroPrimary}</Typography>
                <Typography variant="h2" color='primary.main'>{content.heroSecondary}</Typography>
                <Typography variant="subtitle2" color='primary.main' sx={{ mb: 8 }}>{content.altHeader}</Typography>
                <Typography variant="body1" color='primary.main' sx={{ mb: 10 }}>{content.heroSubHeader}</Typography>
            </Container>
        </Stack >
    )
}
Centerd.propTypes = {
    content: PropTypes.object,
};

export default Hero


