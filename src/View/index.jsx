import React from 'react';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import { query } from '../client';
import { Hero } from '../components/Hero'
import Container from '@mui/material/Container';

import { Outline } from '../components/Outline'
import Post from '../components/Post';
import { Section } from '../components/Section';

const slug = () => {
    const { view } = useParams();
    if (view === undefined) {
        return 'home'
    }
    return view
}

export const View = () => {
    const view = slug()
    const { data, loading } = useQuery(query);
    // console.log(data)

    const viewFilter = data && data.assembly.reference.filter(item => item.name === view)
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero")
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section")
    // console.log(header)
    console.log(section)

    // const header = data && data.assembly.reference[0]
    // const section = data && data.assembly.reference[1]

    // console.log(viewFilter)
    return (
        <Container maxWidth='lg' sx={{ mt: 15}}>
            <>
                {header &&
                    <Hero content={{
                    heroPrimary: header[0].heroPrimary,
                    heroSecondary: header[0].heroSecondary,
                    altHeader: header[0].altHeader,
                    heroSubHeader: header[0].heroSubHeader,
                    direction: header[0].direction
                    }} />
                    
                }
                {section &&
                    <Section content={{ header: section[0].header, direction: section[0].direction, description: section[0].description, section: section[0].section}} />
                }
                {/* {section &&
                    <Section content={{ header: section[1].header, direction: section[1].direction, description: section[1].description, section: section[1].section }} />
                } */}
                {/* {section &&
                    <Post content={{ header: section.header, description: section.description }} />
                    
                } */}
                
            </>
            <Outline visible={loading} />
        </Container>
    )
}
