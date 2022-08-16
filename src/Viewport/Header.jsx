import React from 'react';

import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { useQuery } from "@apollo/client";

import { query } from '@/client'
import { TemporaryDrawer } from '@/components/TemporaryDrawer';
import { IconButton } from '@mui/material';

export const Header = () => {
    const navigate = useNavigate();
    const { data } = useQuery(query);
    
    const onClick = () => {
        navigate(`/`);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={4} color="info" position="fixed" sx={{ px: 2, py: 1 }}>
                {data &&
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <IconButton onClick={onClick}>
                            <CurrencyBitcoinIcon color="primary" fontSize='large' />
                        </IconButton>
                        <TemporaryDrawer />
                    </Box>
                }
            </AppBar >
        </Box>
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;