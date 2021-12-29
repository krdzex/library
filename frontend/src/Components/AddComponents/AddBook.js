import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Navigate, useNavigate } from 'react-router-dom';
import { listPublishers } from '../../ApiService/publisherApi';
import { createBook } from '../../ApiService/booksApi';
import { getAuthorInfo, listAuthors } from '../../ApiService/authorApi';


const AddBook = () => {
    const [authorBooks, setAuthorBooks] = useState([])
    const [allAuthors, setAllAuthors] = useState([])
    const [selectedAuthor, setSelectedAuthor] = useState("")

    const rows = authorBooks.map((author, id) => {
        return { id: id + 1, authorId: author.authorId, name: author.name }
    })

    const columns = [
        {
            field: 'name',
            headerName: 'Author Name',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'lastName',
            headerName: "Action",
            width: 80,
            renderCell: (params) => (
                <Button onClick={() => onDeleteClick(params)}>Delete</Button>
            ),
            sortable: false,
        },
    ];

    const onDeleteClick = (cellData) => {
        setTimeout(() => {
            setAuthorBooks((prevState) => prevState.filter(data => data.authorId !== cellData.row.authorId))
        });
    }

    const onSubmit = (e) => {

        let errorObject = {}
        e.preventDefault()
        for (var key in values) {
            if (values[key] === "")
                errorObject[key] = `${key[0].toUpperCase()}${key.slice(1)} is required`
        }

        if (Object.keys(errorObject).length !== 0) {
            setErrors(errorObject)
            return
        }

        let formData = new FormData();
        formData.append("title", values.title)
        formData.append("description", values.description)
        formData.append("pages", values.pages)
        formData.append("price", values.price)
        formData.append("img", values.img)
        formData.append("publisher_id", values.publisher_id)
        for (let i = 0; i < authorBooks.length; i++) {
            formData.append("authorBooks", authorBooks[i].authorId)
        }
        createBook(formData).then(res => {
            if (res.message) {
                setValues({ ...values, redirect: true })
            } else {
                setErrors(res)
            }
        }).catch(err => console.log(err))

    }


    const [values, setValues] = useState({
        title: "",
        description: "",
        img: "",
        pages: "",
        price: "",
        publisher_id: "",
        redirect: false
    })
    const [publishersList, setPublishersList] = useState([])

    useEffect(() => {
        listPublishers().then(res => setPublishersList(res)).catch(err => console.log(err))
        listAuthors().then(res => setAllAuthors(res)).catch(err => console.log(err))
    }, [])


    const [errors, setErrors] = useState({})
    let navigate = useNavigate();


    const onGoBackClick = () => {
        navigate(`/booksDashboard`);
    }

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onChangeFile = (e) => {
        setValues({ ...values, img: e.target.files[0] })
    }

    const changeSelectedAuthor = (e) => {
        setSelectedAuthor(e.target.value)
    }

    const onAddClick = () => {
        if (selectedAuthor !== "") {
            for (let i = 0; i < authorBooks.length; i++) {
                if (authorBooks[i].authorId === selectedAuthor) {
                    return setErrors({ ...errors, author: "You are already author" })
                }
            }
            setAuthorBooks(prevState => [...prevState, { authorId: selectedAuthor }])
            setSelectedAuthor("")
            delete errors.author
        } else {
            setErrors({ ...errors, author: "First select author" })
        }
    }

    const getAuthorInformations = useCallback(async () => {
        let arrCopy = authorBooks.slice()
        if (arrCopy.length > 0) {
            let authorInformation = await getAuthorInfo(arrCopy[arrCopy.length - 1].authorId)
            arrCopy[arrCopy.length - 1].name = authorInformation.authorInfo.name
            setAuthorBooks(arrCopy)
        }

    }, [authorBooks.length])


    useEffect(() => {
        getAuthorInformations()
    }, [authorBooks.length, getAuthorInformations])


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
                                                onChange={onChange("publisher_id")}
                                                value={values.publisher_id}
                                                error={errors.publisher_id !== undefined}

                                            >
                                                {publishersList.map((publisher, id) => {
                                                    return <MenuItem value={publisher._id} key={id}>{publisher.name}</MenuItem>
                                                })}

                                            </Select>
                                            {errors.publisher_id !== undefined && (<FormHelperText error={true}>Publisher is required</FormHelperText>)}
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
                                {errors.img !== undefined && (<Typography variant='h7' align="center" color={"red"}>{errors.img}</Typography>)}

                                <label htmlFor="contained-button-file" >
                                    <Input accept="image/*" id="contained-button-file" name="img" multiple type="file" sx={{ display: "none" }} onChange={onChangeFile} />
                                    <Button variant="contained" component="span" fullWidth sx={{ mt: 1 }}>
                                        Upload Photo
                                    </Button>
                                </label>
                                <Grid container columnSpacing={1}>
                                    <Grid item xs={12} sm={8}>
                                        <FormControl fullWidth margin="normal">
                                            <InputLabel id="demo-simple-select-label">Author</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Author"
                                                onChange={changeSelectedAuthor}
                                                value={selectedAuthor}
                                                error={errors.author !== undefined}

                                                sx={{ height: "50px" }}
                                            >
                                                {allAuthors.map((author, id) => {
                                                    return <MenuItem value={author._id} key={id}>{author.name}</MenuItem>
                                                })}
                                            </Select>
                                            {errors.author !== undefined && (<FormHelperText error={true}>{errors.author}</FormHelperText>)}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Button variant="outlined" fullWidth sx={{ mt: "16px", height: "50px" }} onClick={() => onAddClick()}>
                                            Add
                                        </Button>
                                    </Grid>
                                </Grid>

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
                                <Button variant="contained" type='submit' fullWidth sx={{ background: "#50C878" }}>
                                    Submit
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" fullWidth onClick={() => onGoBackClick()}>
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

export default AddBook;