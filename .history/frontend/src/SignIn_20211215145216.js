import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';


const SignIn = () => {
    return (
        <AppBar position='relative' >
            <Toolbar  sx={{ position:"static",display:"flex",justifyContent:"space-between" }}>
                <Typography variant="h6" >
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