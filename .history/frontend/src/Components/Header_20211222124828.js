import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
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
    },
    links:{
        margin: 
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
                    <Link to={"/publishersDashboard"}>
                        Publishers
                    </Link>
                    <Link to={"/booksDashboard"}>
                        Books
                    </Link>
                    <Link to={"/authorsDashboard"}>
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