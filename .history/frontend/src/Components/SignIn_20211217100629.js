import { Avatar, Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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


const SignIn = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
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