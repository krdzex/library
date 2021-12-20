import { Container, Typography } from '@mui/material';
import React from 'react';
import Header from './Header';

const BooksDashboard = () => {
    return (
        <div>
            <Header />
            <Container component="main" maxWidth="xs" sx={{ mt: 15 }}>
                <Box>
                    <Typography>
                        
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default BooksDashboard;