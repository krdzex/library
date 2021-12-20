import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const SignIn = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    );
};

export default SignIn;