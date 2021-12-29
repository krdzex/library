import { Avatar, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';
import Header from './Header';
import { signin } from '../Auth/authApi';
import { useDispatch } from 'react-redux';
import { logIn } from '../Actions';
import authHelper from '../Auth/authHelper';
import { Navigate } from 'react-router-dom';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "20px"
    }
})


const SignIn = () => {

    const [values, setValues] = useState({ userName: "", password: "" })
    const classes = useStyles();
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const onSubmit = (e) => {
        e.preventDefault()
        let user = {
            userName: values.userName || undefined,
            password: values.password || undefined
        }
        signin(user).then(response => {
            if (!response.userName) {
                dispatch(logIn())
                authHelper.authenticate(response, () => {
                    setErrors({})
                    setValues({ ...values, redirect: true })
                })
            } else {
                setErrors(response)
            }
        }).catch(err => console.log(err))
    }

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    if (values.redirect) return <Navigate to={"/authorDashboard"} />

    return (<div>
        <Header />
        <Container component="main" maxWidth="xs" sx={{ mt: 15 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

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
                            onChange={onChange("userName")}
                            error={errors.userName !== undefined}
                            helperText={errors.userName}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={onChange("password")}
                            error={errors.password !== undefined}
                            helperText={errors.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, height: 50 }}
                        >Sign In</Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    </div>
    );
};

export default SignIn;