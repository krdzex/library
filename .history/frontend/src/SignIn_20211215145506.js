import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    toolBar: {
        display: "flex",
        justifyContent: "space-between"
    }
})

const SignIn = () => {
    const classes = useStyles();
    return (
        <AppBar position='relative' >
            <Toolbar>
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