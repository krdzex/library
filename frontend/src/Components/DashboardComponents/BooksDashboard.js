import { Container, InputBase, Typography, Box, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { deleteBook, listBooks, searchedBooks } from '../../ApiService/booksApi';
import authHelper from '../../Auth/authHelper';

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
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        listBooks().then(res => {
            setAllBooks(res);
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])

    const rows = allBooks.map((book, id) => {
        return { id: id + 1, title: book.title, pages: book.pages, price: book.price, _id: book._id }
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: "center", align: "center" },
        {
            field: 'title', headerName: 'Title', flex: 1,
            minWidth: 150
        },
        { field: 'pages', headerName: 'Pages', width: 130, type: 'number', headerAlign: "center", align: "center" },
        {
            field: 'price',
            type: 'number',
            headerName: 'Price',
            headerAlign: "center",
            align: "center",
            width: 90,
        },
        authHelper.isAuthentcated().role === "admin" && ({
            field: 'add', headerName: 'Add', width: 180,
            headerAlign: 'center',
            sortable: false,

            renderCell: (params) => (
                <Box >
                    <Button variant="contained" sx={{ mr: 1 }} onClick={() => onEditClick(params)}>Edit</Button>
                    <Button variant="contained" sx={{ background: "red" }} onClick={() => onDeleteClick(params)}>Delete</Button>
                </Box>

            )
        }),
    ];

    const onEditClick = (cellInfo) => {
        navigate(`/editBook/${cellInfo.row._id}`);
    }

    const onDeleteClick = (cellInfo) => {
        deleteBook(cellInfo.row._id).then(res => console.log(res)).catch(err => console.log(err))
        setTimeout(() => {
            setAllBooks((prevBooks) => prevBooks.filter(book => book._id !== cellInfo.row._id))
        });
    }


    const onHeaderClick = (e) => {
        if (e.colDef.headerName === "Add") {
            navigate("/addBook");
        }
    }

    const onSearch = (e) => {
        e.preventDefault()
        if (searchValue !== "") {
            searchedBooks(searchValue).then(res => setAllBooks(res)).catch(err => console.log(err))
        } else {
            listBooks().then(res => setAllBooks(res)).catch(err => console.log(err))
        }
    }

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }


    return (
        <div>
            <Container component="main" maxWidth="lg" sx={{ mt: 15 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                    <Box className={classes.box}>
                        <Typography variant='h2'>
                            Books
                        </Typography>
                        <form onSubmit={onSearch}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search..." sx={{ fontSize: "25px" }} value={searchValue} onChange={onChange}
                                />
                            </div>
                        </form>
                    </Box>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            disableColumnMenu
                            disableSelectionOnClick
                            loading={loading}
                            onColumnHeaderClick={onHeaderClick}
                        />
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default BooksDashboard;