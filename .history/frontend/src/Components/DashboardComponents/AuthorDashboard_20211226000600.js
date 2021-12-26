import { Container, InputBase, Typography, Box, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import React from 'react';
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
        justifyContent: "space-between",
        alignItems: "center"
    }
})



const AuthorDashboard = () => {
    const classes = useStyles();

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'Image', width: 500 },
        { field: 'lastName', headerName: 'Name', width: 130 },
        { field: 'lastName', headerName: 'DOB', width: 90, },
        { field: 'email', headerName: 'Email', width: 90, },
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
    

    return (
        <div>
            <Container component="main" maxWidth="lg" sx={{ mt: 15 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Box className={classes.box}>
                        <Typography variant='h2'>
                            Authors
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
                        />
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default AuthorDashboard;