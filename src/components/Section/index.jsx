import React from 'react';

import ReactMarkdown from "react-markdown";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';

export const Left = ({ content }) => {
    console.log(content.description)
    return (
        <Grid
            container
            wrap-xs-nowrap
            justifyContent="left"
            direction={{ xs: 'column-reverse', md: 'row' }}
            spacing={2}
        >
            <Grid item xs={4} md={6}>
                <Typography color='primary.main' variant='h3' sx={{ mb: 5 }}>{content.header}</Typography>
                <Typography color='primary.main' variant='h3' sx={{ mb: 5 }}>{content.section}</Typography>
                <ReactMarkdown color='primary.main' children={content.description} />
            </Grid>
            <Grid item xs={12} md={6}>
                {/* <Box sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}> */}
                {/* {content.image.url &&
                        <CardMedia component="img" sx={{ maxWidth: '25rem' }}
                            image={content.image.url} alt={content.image.alt} />
                    } */}
                {/* </Box> */}
            </Grid>
        </Grid >
    )
}
Left.propTypes = {
    content: PropTypes.object,
};


export const Centerd = ({ content }) => {
    console.log(content.description)
    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                direction={{ xs: 'column-reverse', md: 'column' }}
                sx={{ p: 2, pb: 20 }}
                spacing={2}
            >
                <Grid item xs={12} md={6}>
                    <Typography variant='h3' color='primary.main'>{content.header}</Typography>
                    <Typography color='primary.main'>
                        <ReactMarkdown color='primary.main' children={content.description} />
                    </Typography>
                </Grid>
                {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                {content.image.url &&
                    <CardMedia sx={{ maxWidth: '20rem' }} component="img"
                        image={content.image.url} alt={content.image.alt} />
                }
            </Grid> */}
            </Grid >
        </Container>

    )
}
Centerd.propTypes = {
    content: PropTypes.object,
};
