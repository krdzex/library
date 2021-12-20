import React from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';

const SignIn = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant='h6'>
                        Library
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default SignIn;