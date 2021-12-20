import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const SignIn = () => {
    return (
        <AppBar position='relative' >
            <Toolbar  sx={{ position:"static",display:"flex",justifyContent:"space-between" }}>
                <Typography variant="h6" sh>
                    Library
                </Typography>
                <Typography variant="h6">
                    News
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default SignIn;