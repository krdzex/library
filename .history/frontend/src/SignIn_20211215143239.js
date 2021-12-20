import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const SignIn = () => {
    return (
        <AppBar sx={{ position:"static",display:"flex",justifyContent:"space-between" }} >
            <Toolbar  sx={{ position:"static",display:"flex",justifyContent:"space-between" }}>
                <Typography variant="h6" >
                    News
                </Typography>
                <Typography variant="h6">
                    News
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default SignIn;