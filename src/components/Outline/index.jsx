import React from 'react';

import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import * as PropTypes from 'prop-types';

export const Outline = ({ visible }) => {
    if (!visible) {
        return <></>;
    }

    return (
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" >
            <Grid item sx={{ mt: 10 }} >
                <Skeleton variant="rectangular" width={300} height={200} />
            </Grid>
            <Grid item sx={{ mt: 10, mb: 10 }}>
                <Skeleton variant="rectangular" width={300} height={600} />
            </Grid>
        </Grid>
    );
};

Outline.propTypes = {
    visible: PropTypes.bool
};
