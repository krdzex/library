import { Container, InputBase, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { borderRadius, Box, height } from '@mui/system';
import React from 'react';
import Header from './Header';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    search: {
        position: 'relative',
        border: "1px solid black",
        marginLeft: 0,
        maxWidth: '200px',
        paddingLeft: "28px",
        paddingRight: "10px",
        borderRadius: "20px",
        height: "50px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    box: {
        display: "flex",
        justifyContent: "space-between"
    }
})



const BooksDashboard = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <Container component="main" maxWidth="lg" sx={{ mt: 15 }}>
                <Box className={classes.box}>
                    <Typography variant='h2'>
                        Books
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..." sx={{ fontSize: "25px" }}
                        />
                    </div>
                </Box>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </Container>
        </div>
    );
};

export default BooksDashboard;