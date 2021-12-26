

import { Container, InputBase, Typography, Box, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { listPublishers } from '../ApiService/publisherApi';

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
    useEffect(() => {
        listPublishers().then(res => setAllPublishers(res)).catch(err => console.log(err))
    }, [])
    let navigate = useNavigate();
    const classes = useStyles();



    const rows = allPublishers.map((publisher, id) => {
        return { id: id + 1, name: publisher.name, country: publisher.address.country, _id: publisher._id }
    })
    const columns = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center', },
        {
            field: 'name', headerName: 'Name', flex: 1,
            minWidth: 150,
            headerAlign: 'center',
            
        },
        { field: 'country', headerName: 'Country', width: 130, headerAlign: 'center', },
        {
            field: 'add', headerName: 'Add', width: 180,
            headerAlign: 'center',
            renderCell: (params) => (
                <Box >
                    <Button variant="contained" sx={{mr: 1}} onClick={onEditClick}>Edit</Button>
                    <Button variant="contained" sx={{background: "red"}}>Delete</Button>
                </Box>

            )
        },


    ];

    const onHeaderCellClick = (e) => {
        if (e.colDef.headerName === "Add") {
            navigate("/addPublisher");
        }
    }
    const onEditClick = (_id) => {
            //navigate(`/editPublisher/${_id}`);
            console.log(_id)
    }
    const onHeaderCellClick = (e) => {
        if (e.colDef.headerName === "Add") {
            navigate("/addPublisher");
        }
    }

    return (
        <div>
            <Header />
            <Container component="main" maxWidth="lg" sx={{ mt: 15 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                    <Box className={classes.box}>
                        <Typography variant='h2'>
                            Publishers
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
                            onColumnHeaderClick={onHeaderCellClick}
                        />
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default PublisherDashboard;