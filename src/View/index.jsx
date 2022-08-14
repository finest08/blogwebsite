import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { query } from '../client';
import { Hero } from '../components/Hero'
import Box from '@mui/material/Box';

import { Outline } from '../components/Outline'
import { Content } from '../components/Section';
import { Scroll } from '../components/Scroll';
import { Grid } from '@mui/material';

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
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Toolbar id="back-to-top-anchor" />
            <Grid item >
                <Box>
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
                </Box>
                <Scroll {...props}>
                    <Fab size="small" color="secondary" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </Scroll>
                <Outline visible={loading} />
            </Grid>
        </Grid>
    )
}