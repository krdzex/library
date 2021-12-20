import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';

const SignIn = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
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