import { Container, InputBase, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Header from './Header';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "20px"
    }
})



const BooksDashboard = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <Container component="main" maxWidth="xs" sx={{ mt: 15 }}>
                <Box>
                    <Typography variant='h2'>
                        Books
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search ' }}
                        />
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default BooksDashboard;