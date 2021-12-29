import React, { useCallback, useEffect, useState } from 'react';

import { Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Navigate, useNavigate } from 'react-router-dom';
import { createAuthor } from '../../ApiService/authorApi';
import { getBookInfo, listBooks } from '../../ApiService/booksApi';




const AddAuthor = () => {
    let navigate = useNavigate();
    let emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const [authorBooks, setAuthorBooks] = useState([])
    const [allBooks, setAllBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState("")

    const getBookInformations = useCallback(async () => {
        let arrCopy = authorBooks.slice()
        if (arrCopy.length > 0) {
            let bookInformation = await getBookInfo(arrCopy[arrCopy.length - 1].bookId)
            arrCopy[arrCopy.length - 1].name = bookInformation.bookInfo.title
            setAuthorBooks(arrCopy)
        }

    }, [authorBooks.length])

    useEffect(() => {
        getBookInformations()
    }, [authorBooks.length, getBookInformations])


    const changeSelectedBook = (e) => {
        setSelectedBook(e.target.value)
    }
    useEffect(() => {
        listBooks().then(res => setAllBooks(res)).catch(err => console.log(err))
    }, [])
    const [values, setValues] = useState({
        name: "",
        biography: "",
        img: "",
        email: "",
        birthDate: "",
        redirect: false
    })
    const [errors, setErrors] = useState({})
    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const rows = authorBooks.map((book, id) => {
        return { id: id + 1, bookId: book.bookId, title: book.name }
    })

    const columns = [
        {
            field: 'title',
            headerName: 'Book Title',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'add',
            headerName: "Action",
            width: 80,
            renderCell: (params) => (
                <Button onClick={() => onDeleteClick(params)}>Delete</Button>
            ),
            sortable: false,
        },
    ];
    const onGoBackClick = () => {
        navigate(`/authorDashboard`);
    }

    const onChangeFile = (e) => {
        setValues({ ...values, img: e.target.files[0] })
    }

    const onDeleteClick = (cellData) => {
        setTimeout(() => {
            setAuthorBooks((prevState) => prevState.filter(data => data.bookId !== cellData.row.bookId))
        });
    }

    const onSubmit = (e) => {
        let errorObject = {}
        e.preventDefault()
        for (var key in values) {
            if (key === "email" && values[key] !== "") {
                if (!values[key].match(emailRegex)) errorObject.email = "Email is invalid!"
            } else {
                if (values[key] === "") errorObject[key] = `${key[0].toUpperCase()}${key.slice(1)} is required`
            }
        }

        if (Object.keys(errorObject).length !== 0) {
            setErrors(errorObject)
            return
        }

        let formData = new FormData();
        formData.append("name", values.name)
        formData.append("biography", values.biography)
        formData.append("img", values.img)
        formData.append("birthDate", values.birthDate)
        formData.append("email", values.email)
        for (let i = 0; i < authorBooks.length; i++) {
            formData.append("authorBooks", authorBooks[i].bookId)
        }

        createAuthor(formData).then(res => {
            if (res.message) {
                setValues({ ...values, redirect: true })
            } else {
                setErrors(res)
            }
        }).catch(err => console.log(err))
    }
    const onAddClick = () => {
        if (selectedBook !== "") {
            for (let i = 0; i < authorBooks.length; i++) {
                if (authorBooks[i].bookId === selectedBook) {
                    return setErrors({ ...errors, books: "You are already author" })
                }
            }
            setAuthorBooks(prevState => [...prevState, { bookId: selectedBook }])
            setSelectedBook("")
            delete errors.books
        } else {
            setErrors({ ...errors, books: "First select book" })
        }
    }

    if (values.redirect) return <Navigate to={"/authorDashboard"} />

    return (
        <div>
            <Container maxWidth="md" component="main" sx={{ mt: 12, mb: 5 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography variant='h2' mb={3}>Add Author</Typography>
                    <form onSubmit={(e) => onSubmit(e)} encType="multipart/form-data" autoComplete='off'>
                        <Grid container spacing={5} alignItems="flex-start">
                            <Grid item sm={8} xs={12}>
                                <Box>
                                    <Grid item xs={12} sm={6} >
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            label="Name"
                                            type="text"
                                            value={values.name}
                                            onChange={onChange("name")}
                                            error={errors.name !== undefined}
                                            helperText={errors.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Biography"
                                            multiline
                                            rows={5}
                                            fullWidth
                                            margin='normal'
                                            value={values.biography}
                                            onChange={onChange("biography")}
                                            error={errors.biography !== undefined}
                                            helperText={errors.biography}
                                        />
                                    </Grid>
                                    <Grid container columnSpacing={5}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                label="Email"
                                                type="text"
                                                value={values.email}
                                                onChange={onChange("email")}
                                                error={errors.email !== undefined}
                                                helperText={errors.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                margin="normal"
                                                id="date"
                                                label="Birth date"
                                                type="date"
                                                fullWidth
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                value={values.birthDate}
                                                onChange={onChange("birthDate")}
                                                error={errors.birthDate !== undefined}
                                                helperText={errors.birthDate}
                                            />
                                        </Grid>
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
                                            <InputLabel id="demo-simple-select-label">Books</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Books"
                                                onChange={changeSelectedBook}
                                                value={selectedBook}
                                                error={errors.books !== undefined}

                                                sx={{ height: "50px" }}
                                            >
                                                {allBooks.map((book, id) => {
                                                    return <MenuItem value={book._id} key={id}>{book.title}</MenuItem>
                                                })}
                                            </Select>
                                            {errors.books !== undefined && (<FormHelperText error={true}>{errors.books}</FormHelperText>)}
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

export default AddAuthor