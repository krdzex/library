import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

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
            </Box>
        </div>
    );
};

export default SignIn;