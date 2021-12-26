import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    toolBar: {
        display: "flex",
        justifyContent: "space-between"
    },
    appBar: {
        position: "static",
        color: "default",
        borderBottom: "1px solid black"
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} color="default">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h4" color="inherit">
                    Library
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Publishers
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="/booksDashboard"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Books
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="/authorDashboard"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Authors
                    </Link>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default Header;