import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HomePage = () => {
    return (
        <Container maxWidth="md" component="main" sx={{ mt: 12, mb: 5 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Box>
                    <img src={process.env.PUBLIC_URL + `/images/mainImg.jpg`} width={"100%"} alt='homePage img'/>
                </Box>
                <Typography mt={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus lorem justo, sit amet faucibus lectus consectetur ac. Aliquam sollicitudin magna non ante vehicula dapibus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus lorem justo, sit amet faucibus lectus consectetur ac. Aliquam sollicitudin magna non ante vehicula dapibus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus lorem justo, sit amet faucibus lectus consectetur ac. Aliquam sollicitudin magna non ante vehicula dapibus.
                </Typography>
            </Paper>
        </Container>
    );
};

export default HomePage;