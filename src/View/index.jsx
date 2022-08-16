import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { query } from '@/client';
import { Hero } from '@/components/Hero'

import { Outline } from '@/components/Outline'
import { Content } from '@/components/Section';
import { Scroll } from '@/components/Scroll';
import { Container } from '@mui/system';

const slug = () => {
    const { view } = useParams();
    if (view === undefined) {
        return 'home'
    }
    return view
}

export const View = (props) => {
    const view = slug()
    const { data, loading } = useQuery(query);

    const viewFilter = data && data.assembly.reference.filter(item => item.name === view)
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero")
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section")

    return (
        <Box direction="column" justifyContent="center" alignItems="center" >
            <Toolbar id="back-to-top-anchor" />
            {loading ?
                <Outline visible={true} />
                :
                <Container sx={{ py: 4 }}>
                    <Paper elevation={3} sx={{ px: 2, pt: 4, pb: 16 }}>
                        {header &&
                            <Hero content={{
                                heroPrimary: header[0].heroPrimary,
                                heroSecondary: header[0].heroSecondary,
                                altHeader: header[0].altHeader,
                                heroSubHeader: header[0].heroSubHeader,
                                direction: header[0].direction,
                            }}
                            />
                        }
                        {section &&
                            <Content content={{
                                header: section[0].header,
                                description: section[0].description,
                                section: section[0].section
                            }}
                            />
                        }
                    </Paper>
                    <Box display="flex" justifyContent='center' py={10} >
                        <CurrencyBitcoinIcon color="primary" fontSize='large' />
                    </Box>
                </Container>
            }
            <Scroll {...props}>
                <Fab size="small" color="success" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Scroll>
            <Outline visible={loading} />
        </Box>
    )
}