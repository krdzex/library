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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default SignIn;