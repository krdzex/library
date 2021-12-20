import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const SignIn = () => {
    return (
        <div>

            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant='h6' flexGrow={1}>
                        Library
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </div>
    );
};

export default SignIn;