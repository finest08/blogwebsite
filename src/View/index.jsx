import React from 'react';
import { useState, useEffect } from 'react';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { query } from '../client';
import { Hero } from '../components/Hero'
import Container from '@mui/material/Container';

import { Outline } from '../components/Outline'
import { Centerd, Left } from '../components/Section';

const slug = () => {
    const { view } = useParams();
    if (view === undefined) {
        return 'home'
    }
    return view
}

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;


export const View = () => {
    const view = slug()
    const { data, loading } = useQuery(query);
    let [width, setWidth] = useState(getWidth());

    const viewFilter = data && data.assembly.reference.filter(item => item.name === view)
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero")
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section")

    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth())
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        };
    }, [])

    return (
        <Container maxWidth='lg' sx={{ mt: 15 }}>
            {width > 400 && (
                <>
                    {header &&
                        <Hero content={{
                            heroPrimary: header[0].heroPrimary,
                            heroSecondary: header[0].heroSecondary,
                            altHeader: header[0].altHeader,
                            heroSubHeader: header[0].heroSubHeader,
                            direction: header[0].direction
                        }}
                        />
                    }
                    {section &&
                        <Centerd content={{
                            header: section[0].header,
                            description: section[0].description,
                            section: section[0].section
                        }}
                        />
                    }
                </>
            )}
            {width < 300 && (
                <>
                    {header &&
                        <Hero content={{
                            heroPrimary: header[0].heroPrimary,
                            heroSecondary: header[0].heroSecondary,
                            altHeader: header[0].altHeader,
                            heroSubHeader: header[0].heroSubHeader,
                            // direction: header[0].direction
                        }}
                        />
                    }
                    {section &&
                        <Left content={{
                            header: section[0].header,
                            description: section[0].description,
                            section: section[0].section
                        }} />
                    }
                </>
            )}
            <Outline visible={loading} />
        </Container>
    )
}