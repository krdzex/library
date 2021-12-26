import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Button, Card, CardContent, CardHeader, Container, FormControl, FormHelperText, Grid, Input, InputLabel, Link, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { listPublishers } from '../../ApiService/publisherApi';
import { createBook, getBookInfo } from '../../ApiService/booksApi';

const useStyles = makeStyles({
    button: {
        minHeight: "50px",
        '&:hover': {
            background: "rgba(0, 0, 0, 0.3)!important"
        }
    }
})

const EditBook = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const { bookId } = useParams()
    const [errors, setErrors] = useState({})
    const [defaultPublisher,setDefaultPublisher] = useState("")
    const [values, setValues] = useState({
        title: "",
        description: "",
        img: "",
        pages: "",
        price: "",
        publisherId: "",
        redirect: false
    })

    useEffect(() => {
        getBookInfo(publisherId).then(res => {
            setValues({
                title: title.name,
                description: res.description,
                img: res.img,
                pages: res.pages,
                price: res.price,
                publisherId: res.publisherId,
                redirect: false
            })

        }).catch(err => console.log(err))
    }, [bookId])


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
        console.log("a")
        let errorObject = {}
        e.preventDefault()
        for (var key in values) {
            if (values[key] === "")
                errorObject[key] = `${key[0].toUpperCase()}${key.slice(1)} is required`
        }
        console.log(Object.keys(errorObject).length)
        if (Object.keys(errorObject).length !== 0) {
            setErrors(errorObject)
            return
        }
        console.log("aa2")
        let formData = new FormData();
        formData.append("title", values.title)
        formData.append("description", values.description)
        formData.append("pages", values.pages)
        formData.append("price", values.price)
        formData.append("img", values.img)
        formData.append("publisherId", values.publisherId)

        createBook(formData).then(res => {
            if (res.message) {
                setValues({ ...values, redirect: true })
            }
        }).catch(err => console.log(err))

    }



    const [publishersList, setPublishersList] = useState([])

    useEffect(() => {
        listPublishers().then(res => setPublishersList(res)).catch(err => console.log(err))
    }, [])


    const onGoBackClick = () => {
        navigate(`/publisherDashboard`);
    }

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onChangeFile = (e) => {
        setValues({ ...values, img: e.target.files[0] })
    }
    console.log(errors)


    if (values.redirect) return <Navigate to={"/booksDashboard"} />

    return (
        <div>
            <Container maxWidth="md" component="main" sx={{ mt: 12, mb: 5 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography variant='h2' align="center" mb={3}>Add Book</Typography>
                    <form onSubmit={(e) => onSubmit(e)} encType="multipart/form-data" autoComplete='off'>
                        <Grid container spacing={5} alignItems="flex-start">
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
                                            error={errors.title !== undefined}
                                            helperText={errors.title}
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
                                            error={errors.description !== undefined}
                                            helperText={errors.description}
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
                                                error={errors.price !== undefined}
                                                helperText={errors.price}
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
                                                error={errors.pages !== undefined}
                                                helperText={errors.pages}
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
                                                value={values.publisherId}
                                                error={errors.publisherId !== undefined}

                                            >
                                                {publishersList.map((publisher, id) => {
                                                    return <MenuItem value={publisher._id} key={id}>{publisher.name}</MenuItem>
                                                })}

                                            </Select>
                                            {errors.publisherId !== undefined && (<FormHelperText error={true}>Publisher is required</FormHelperText>)}
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
                                    <Input accept="image/*" id="contained-button-file" name="img" multiple type="file" sx={{ display: "none" }} onChange={onChangeFile} />
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
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" type='submit' fullWidth className={classes.button} sx={{ background: "#50C878" }}>
                                    Submit
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" fullWidth className={classes.button} onClick={() => onGoBackClick()}>
                                    Go back
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div >
    )

};

export default EditBook;