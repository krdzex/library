import { Container, CssBaseline } from '@mui/material';
import React from 'react';

const SignIn = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        ></Box>
        </Container>


    );
};

export default SignIn;