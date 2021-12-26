import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Button, Card, CardContent, CardHeader, Container, FormControl, Grid, Input, InputLabel, Link, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Navigate, useNavigate } from 'react-router-dom';
import { listPublishers } from '../../ApiService/publisherApi';


const useStyles = makeStyles({

})


const AddBook = () => {

    const rows = [
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
        {
            field: 'id',
            headerName: 'ID',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'lastName',
            headerName: "Action",
            width: 80,
            renderCell: (params) => (
                <Button>Delete</Button>
            )
        },
    ];

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const [values, setValues] = useState({
        title: "",
        description: "",
        img: "",
        pages: "",
        price: "",
        publisherId: "",
        redirect: false
    })
    const [publishersList, setPublishersList] = useState([])

    useEffect(() => {
        listPublishers().then(res => setPublishersList(res)).catch(err => console.log(err))
    }, [])


    const [errors, setErrors] = useState({})
    let navigate = useNavigate();


    const onGoBackClick = () => {
        navigate(`/publisherDashboard`);
    }

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    console.log(values)

    if (values.redirect) return <Navigate to={"/publisherDashboard"} />

    return (
        <div>
            <Container maxWidth="md" component="main" sx={{ mt: 12, mb: 5 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography variant='h2' mb={3}>Add Book</Typography>
                    <Grid container spacing={5} component="form" onSubmit={onSubmit} alignItems="flex-start">
                        <Grid item sm={8} xs={12}>
                            <Box>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        label="Title"
                                        type="text"
                                        value={values.title}
                                        onChange={onChange("title")}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Description"
                                        multiline
                                        rows={5}
                                        fullWidth
                                        margin='normal'
                                        value={values.description}
                                        onChange={onChange("description")}
                                    />
                                </Grid>
                                <Grid container columnSpacing={5}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            label="Price"
                                            type="number"
                                            value={values.price}
                                            onChange={onChange("price")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            label="Pages"
                                            type="number"
                                            value={values.pages}
                                            onChange={onChange("pages")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={5.6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel id="demo-simple-select-label">Publisher</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Publisher"
                                            onChange={onChange("publisherId")}
                                            value={values.publisherId.name}
                                        >
                                            {publishersList.map((publisher, id) => {
                                                return <MenuItem value={{ publisher_id: publisher._id, name: publisher.name }} key={id}>{publisher.name}</MenuItem>
                                            })}

                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            height={"100%"}
                        >
                            <Box>
                                <img src={process.env.PUBLIC_URL + `/images/person3.jpg`} width={"100%"} />
                            </Box>

                            <label htmlFor="contained-button-file" >
                                <Input accept="image/*" id="contained-button-file" multiple type="file" sx={{ display: "none" }} />
                                <Button variant="contained" component="span" fullWidth sx={{ mt: 1 }}>
                                    Upload Photo
                                </Button>
                            </label>
                            <Box sx={{ height: "50px", width: "100%", mt: 2 }}>
                                <Button variant="outlined" sx={{ float: "right" }}>
                                    Add Author
                                </Button>
                            </Box>

                            <div style={{ height: 270, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={3}
                                    rowsPerPageOptions={[3]}
                                    disableColumnMenu
                                    disableSelectionOnClick

                                />
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div >
    )

};

export default AddBook;