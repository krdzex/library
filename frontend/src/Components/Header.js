import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import authHelper from '../Auth/authHelper';


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
    links: {
        marginRight: "25px",
        textDecoration: "none",
        fontSize: "20px",
        color: "black",
        marginTop: "5px"
    }
})

const Header = () => {
    const classes = useStyles();
    const logged = useSelector(state => state.loginReducer)
    const navigate = useNavigate()
    const onLoginClick = () => {
        navigate("/signIn")
    }

    const onSignOutClick = () => {
        authHelper.signOut();
        window.location.reload()
    }


    return (
        <AppBar className={classes.appBar} color="default">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h4" color="inherit">
                    Library
                </Typography>
                {authHelper.isAuthentcated() || logged ? <nav>
                    <Link to={"/publisherDashboard"} className={classes.links}>
                        Publishers
                    </Link>
                    <Link to={"/booksDashboard"} className={classes.links}>
                        Books
                    </Link>
                    <Link to={"/authorDashboard"} className={classes.links}>
                        Authors
                    </Link>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => onSignOutClick()}>
                        Sign Out
                    </Button>
                </nav> :
                    <nav>
                        <Link to={"/ourTeam"} className={classes.links}>
                            Our Team
                        </Link>
                        <Link to={"/homePage"} className={classes.links}>
                            Home
                        </Link>
                        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => onLoginClick()}>
                            Login
                        </Button>
                    </nav>}
            </Toolbar>
        </AppBar>
    );
};

export default Header;