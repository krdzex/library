import React from 'react';
import { AppBar, Button, CssBaseline, Link, Toolbar, Typography } from '@mui/material';
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
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" color="inherit" noWrap >
                    Company name
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Features
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Support
                    </Link>
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default SignIn;