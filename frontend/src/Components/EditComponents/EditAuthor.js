import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Button, Card, CardContent, CardHeader, Container, FormControl, Grid, Input, InputLabel, Link, MenuItem, Paper, Select, Skeleton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { createAuthor, getAuthorInfo, updateAuthor } from '../../ApiService/authorApi';
import moment from "moment"

const useStyles = makeStyles({

})


const EditAuthor = () => {
    const classes = useStyles();
    let navigate = useNavigate();
    let emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const [loading, setLoading] = useState(true)
    const [values, setValues] = useState({
        name: "",
        biography: "",
        img: "",
        email: "",
        birthDate: "",
        redirect: false
    })
    const [originalImg, setOriginalImg] = useState("")
    const { authorId } = useParams()
    const [errors, setErrors] = useState({})

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    useEffect(() => {
        getAuthorInfo(authorId).then(res => {
            setValues({
                name: res.name,
                biography: res.biography,
                img: res.img,
                email: res.email,
                birthDate: moment(res.birthDate).format("yyyy-MM-DD"),
                redirect: false
            })
            setOriginalImg(res.img)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [authorId])

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
    const onGoBackClick = () => {
        navigate(`/authorDashboard`);
    }

    const onChangeFile = (e) => {
        setValues({ ...values, img: e.target.files[0] })
    }

    const onSubmit = (e) => {
        let errorObject = {}
        e.preventDefault()
        // for (var key in values) {
        //     if (key === "email" && values[key] !== "") {
        //         if (!values[key].match(emailRegex)) errorObject.email = "Email is invalid!"
        //     } else {
        //         if (values[key] === "") errorObject[key] = `${key[0].toUpperCase()}${key.slice(1)} is required`
        //     }
        // }

        // if (Object.keys(errorObject).length !== 0) {
        //     setErrors(errorObject)
        //     return
        // }

        let formData = new FormData();
        formData.append("name", values.name)
        formData.append("biography", values.biography)
        formData.append("img", values.img)
        formData.append("birthDate", values.birthDate)
        formData.append("email", values.email)

        updateAuthor(authorId,formData).then(res => {
            if (res.message) {
                setValues({ ...values, redirect: true })
            }else{
                setErrors(res)
            }
        }).catch(err => console.log(err))
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
                                {loading ? <Skeleton variant="rectangular" height={200} /> : <Box>
                                    <img src={process.env.PUBLIC_URL + `/images/${originalImg}`} width={"100%"} />
                                </Box>}
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

export default EditAuthor