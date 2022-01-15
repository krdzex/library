

import { Container, InputBase, Typography, Box, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { deletePublisher, listPublishers, searchedPublishers } from '../../ApiService/publisherApi';
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



const PublisherDashboard = () => {

    const [allPublishers, setAllPublishers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        listPublishers().then(res => {
            
            setAllPublishers(res.filter(publisher => publisher.active !== false));
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])
    const [searchValue, setSearchValue] = useState("")
    let navigate = useNavigate();
    const classes = useStyles();

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    const rows = allPublishers.map((publisher, id) => {
        return { id: id + 1, name: publisher.name, country: publisher.address.country, _id: publisher._id }
    })
    const columns = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: "center", align: "center" },
        {
            field: 'name', headerName: 'Name', flex: 1,
            minWidth: 150,
        },
        { field: 'country', headerName: 'Country', width: 200, headerAlign: "center", align: "center" },
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
        navigate(`/editPublisher/${cellInfo.row._id}`);
    }
    const onHeaderClick = (e) => {
        if (e.colDef.headerName === "Add") {
            navigate("/addPublisher");
        }
    }

    const onDeleteClick = (cellInfo) => {
        deletePublisher(cellInfo.row._id).then(res => console.log(res)).catch(err => console.log(err))
        setTimeout(() => {
            setAllPublishers((prevPublishers) => prevPublishers.filter(publisher => publisher._id !== cellInfo.row._id))
        });
    }

    const onSearch = (e) => {
        e.preventDefault()
        if (searchValue !== "") {
            searchedPublishers(searchValue).then(res => setAllPublishers(res)).catch(err => console.log(err))
        } else {
            listPublishers().then(res => setAllPublishers(res)).catch(err => console.log(err))
        }
    }

    return (
        <div>
            <Container component="main" maxWidth="lg" sx={{ mt: 15 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Box className={classes.box}>
                        <Typography variant='h2'>
                            Publishers
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
                            onColumnHeaderClick={onHeaderClick}
                            loading={loading}
                        />
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default PublisherDashboard;