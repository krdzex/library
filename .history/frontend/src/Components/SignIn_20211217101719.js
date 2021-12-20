import { Avatar, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "20px"
    },
    appBar: {
        position: "static",
        color: "default",
        borderBottom: "1px solid black"
    }
})


const SignIn = () => {

    const [values, setValues] = useState({ userName: "", password: "" })
    const classes = useStyles();

    const onSubmit = () => {

    }

    const onChange = name => event => {
        setValues({})
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className={classes.box}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="userName"
                        label="User Name"
                        autoFocus
                        value={values.userName}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        value={values.password}
                        onChange={}
                    />
                </Box>
            </Box>
        </Container>


    );
};

export default SignIn;