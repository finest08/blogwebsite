import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton, Stack } from '@mui/material';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: 'primary.main' }}>
            <Stack direction='column' justifyContent="center" alignItems="flex-start" sx={{ pt: 4, px: 4 }}>
                <Stack direction='row' alignItems="center" spacing={0}>
                    <IconButton href="mailto:@" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <AlternateEmailIcon color="info" />
                        {/* <EmailIcon color="info" /> */}
                    </IconButton>
                    <IconButton href="https://twitter.com/@mrmamosw" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <TwitterIcon color="info" />
                    </IconButton>
                    <IconButton  target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <InstagramIcon color="info" />
                    </IconButton>
                </Stack>
            </Stack>
            <Box
                sx={{
                    display: "flex",
                    alignItems: 'center',
                    backgroundColor: 'primary.main',
                    justifyContent: "center",
                    py: 5, px: 2, mt: 'auto'
                }}
            >
                <Copyright />
            </Box>
        </Box>

    );
}

export default Footer;

const Copyright = () => {
    return (
        <Typography variant="body2" color="info.main">
            {'Copyright © '}
            <Link underline="none" sx={{ color: "info.main" }} href="" >
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}