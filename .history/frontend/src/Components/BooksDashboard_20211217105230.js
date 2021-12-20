import { Container, InputBase, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { borderRadius, Box } from '@mui/system';
import React from 'react';
import Header from './Header';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    search: {
        position: 'relative',
        border:"1px solid black",
        marginLeft: 0,
        maxWidth: '200px',
        paddingLeft: "25px",
        paddingRight:"10px",
        borderRadius: "20px"
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: "5px",
    },
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