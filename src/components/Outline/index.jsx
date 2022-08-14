import React from 'react';

import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import * as PropTypes from 'prop-types';

export const Outline = ({ visible }) => {
    if (!visible) {
        return <></>;
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4, mt: 5 }}>
            <Skeleton variant="rectangular" width={800} height={1000} />
        </Container>
    );
};

Outline.propTypes = {
    visible: PropTypes.bool
};
