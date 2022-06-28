import React from 'react';

import ReactMarkdown from "react-markdown";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';

// export const Section = ({ content }) => {
//     const left = () => {
//         if (content.direction === null) {
//             return 'Left'
//         }
//         if (content.direction === 'Left') {
//             return 'Left'
//         }
//     }
//     const direction = left()

//     return (
//         <Box sx={direction}>
//             <Container maxWidth="lg" >
//                 {direction && <Left content={content} />}
//                 {content.direction === 'Center' && <Centerd content={content} />}
//                 {content.direction === 'Right' && <Right content={content} />}
//             </Container>
//         </Box>
//     )
// }

// Section.propTypes = {
//     content: PropTypes.any,
// };

const Left = ({ content }) => {
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
                    <ReactMarkdown color='primary' children={content.description} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
                        {/* {content.image.url &&
                        <CardMedia component="img" sx={{ maxWidth: '25rem' }}
                            image={content.image.url} alt={content.image.alt} />
                    } */}
                    </Box>
                </Grid>
            </Grid >
    )
}
Left.propTypes = {
    content: PropTypes.object,
};

export const Centerd = ({ content }) => {
    return (
        <Container>
            <Grid
                container
                spacing={2}
                direction={{ xs: 'column-reverse', md: 'column' }}
                justifyContent="center"
                sx={{ pb: 20 }}
            >
                <Grid item>
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

export const Right = ({ content }) => {
    return (
            <Grid
                container
                direction="row"
                justifyContent="left"
                spacing={2}
            >
            <Grid item xs={12} md={6} >
                <Grid item>
                    <Typography variant='h3' color='primary.main'>{content.header}</Typography>
                    <Typography color='primary.main'>
                        <ReactMarkdown color='primary.main' children={content.description} />
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
    )
}
Right.propTypes = {
    content: PropTypes.object,
};