import { Container, InputBase, Typography, Box, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { listBooks } from '../../ApiService/booksApi';

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
        justifyContent: "space-between",
        alignItems: "center"
    }
})



const BooksDashboard = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        listBooks().then(res => setAllBooks(res)).catch(err => console.log(err))
    }, [])

    const rows = allBooks.map((book, id) => {
        return { id: id + 1, title: book.title, pages: book.pages, price: book.price, _id: book._id }
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'title', headerName: 'Title', flex: 1,
            minWidth: 150, width: 500
        },
        { field: 'lastName', headerName: 'Pages', width: 130, type: 'number', },
        {
            field: 'age',
            type: 'number',
            headerName: 'Price',
            width: 90,
        },
        {
            field: 'add', headerName: 'Add', width: 180,
            headerAlign: 'center',
            sortable: false,

            renderCell: (params) => (
                <Box >
                    <Button variant="contained" sx={{ mr: 1 }} onClick={() => onEditClick(params)}>Edit</Button>
                    <Button variant="contained" sx={{ background: "red" }}>Delete</Button>
                </Box>

            )
        },
    ];

    const onEditClick = (cellInfo) => {
        navigate(`/editBook/${cellInfo.row._id}`);
    }

    const onHeaderClick = (e) => {
        if (e.colDef.headerName === "Add") {
            navigate("/addBook");
        }
    }

    return (
        <div>
            <Container component="main" maxWidth="lg" sx={{ mt: 15 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

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
                            disableColumnMenu
                            disableSelectionOnClick

                            onColumnHeaderClick={onHeaderClick}
                        />
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default BooksDashboard;