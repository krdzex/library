import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Header from './Header';

const BooksDashboard = () => {
    return (
        <div>
            <Header />
            <Container component="main" maxWidth="xs" sx={{ mt: 15 }}>
                <Box>
                    <Typography>
                        Books
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default BooksDashboard;