import { Container, InputBase, Typography, Box, Paper, Button, Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { deleteAuthor, listAuthors, searchedAuthors } from '../../ApiService/authorApi';
import moment from "moment"
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



const AuthorDashboard = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const [authors, setAuthors] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getAllAuthors()
    }, [])

    const getAllAuthors = async () => {
        try {
            let allAuthors = await listAuthors()
            for (let i = 0; i < allAuthors.length; i++) {
                allAuthors[i].birthDate = moment(allAuthors[i].birthDate).format("MM/DD/YYYY")
            }
            setAuthors(allAuthors)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    const rows = authors.map((author, id) => {
        return { id: id + 1, name: author.name, img: author.img, email: author.email, _id: author._id, birthDate: author.birthDate }
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: "center", align: "center" },
        {
            field: 'img', headerName: 'Image', width: 100, headerAlign: 'center', sortable: false, align: 'center',
            renderCell: (params) => (
                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/authors/${params.value}`} />
            )
        },
        { field: 'name', headerName: 'Name', width: 50, flex: 1, },

        { field: 'birthDate', headerName: 'DOB', width: 110, headerAlign: "center", align: "center" },
        {
            field: 'email', headerName: 'Email', minWidth: 300
        },
        {
            field: 'add', headerName: 'Add', width: 180,
            headerAlign: 'center',
            sortable: false,

            renderCell: (params) => (
                <Box >
                    <Button variant="contained" sx={{ mr: 1 }} onClick={() => onEditClick(params)}>Edit</Button>
                    <Button variant="contained" sx={{ background: "red" }} onClick={() => onDeleteClick(params)}>Delete</Button>
                </Box>

            )
        },
    ];

    const onEditClick = (cellInfo) => {
        navigate(`/editAuthor/${cellInfo.row._id}`);
    }

    const onDeleteClick = (cellInfo) => {
        deleteAuthor(cellInfo.row._id).then(res => console.log(res)).catch(err => console.log(err))
        let newAuthors = authors.filter(author => author._id !== cellInfo.row._id);
        setAuthors(newAuthors)
    }


    const onHeaderClick = (e) => {
        if (e.colDef.headerName === "Add") {
            navigate("/addAuthor");
        }
    }

    const onSearch = (e) => {
        e.preventDefault()
        if (searchValue !== "") {
            searchedAuthors(searchValue).then(res => setAuthors(res)).catch(err => console.log(err))
        } else {
            listAuthors().then(res => setAuthors(res)).catch(err => console.log(err))
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
                            Authors
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
                    <div style={{ height: 430, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={6}
                            rowsPerPageOptions={[6]}
                            disableColumnMenu
                            disableSelectionOnClick
                            onColumnHeaderClick={onHeaderClick}
                            loading={loading}
                        />
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default AuthorDashboard;