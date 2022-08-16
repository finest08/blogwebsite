import React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import { useQuery } from "@apollo/client";

import { query } from '@/client'
import { TemporaryDrawer } from '@/components/TemporaryDrawer';

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