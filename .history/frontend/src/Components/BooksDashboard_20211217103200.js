import { Container } from '@mui/material';
import React from 'react';
import Header from './Header';

const BooksDashboard = () => {
    return (
        <div>
            <Header />
            <Container component="main" maxWidth="xs" sx={{ mt: 15 }}>
            </Container>
        </div>
    );
};

export default BooksDashboard;