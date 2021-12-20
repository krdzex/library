import { Avatar, Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    appBar: {
        position: "static",
        color: "default",
        borderBottom: "1px solid black"
    }
})


const SignIn = () => {

    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                }}
                
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
            </Box>
        </Container>


    );
};

export default SignIn;