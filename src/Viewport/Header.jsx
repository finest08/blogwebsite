import React from 'react';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar';
// import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
// import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { query } from '../client'
import { TemporaryDrawer } from '../components/TemporaryDrawer';

export const Header = () => {
    const { data } = useQuery(query);
    return (
        <AppBar elevation={4} color="info" position="fixed" sx={{ padding: 1 }}>
            {data &&
                <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Box>
                        <TemporaryDrawer />
                    </Box>
                </Toolbar>
            }
        </AppBar >
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;