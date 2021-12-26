import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Container, Grid, Typography, TextField, Paper } from '@mui/material';
import { createPublisher } from '../../ApiService/publisherApi';
import { Navigate, useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    button: {
        minHeight: "50px",
        '&:hover': {
            background: "rgba(0, 0, 0, 0.3)!important"
        }
    }
})




const AddPublisher = () => {
    let navigate = useNavigate();
    const classes = useStyles();
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name: "",
        road: "",
        zipCode: "",
        city: "",
        country: "",
        redirect: false
    })
    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async (e) => {
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

        e.preventDefault()
        let publisher = {
            name: values.name,
            address: {
                road: values.road,
                zipCode: values.zipCode,
                city: values.city,
                country: values.country,
            }
        }
        createPublisher(publisher).then(response => {
            if (response.message) {
                setValues({ ...values, redirect: true })
            }
        }).catch(err => console.log(err))
    }

    const onGoBackClick = () => {
        navigate(`/publisherDashboard`);
    }

    if (values.redirect) return <Navigate to={"/publisherDashboard"} />
    return (
        <div>
            <Container maxWidth="sm" component="main" sx={{ mt: 12, mb: 5 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography variant='h2' mb={3}>Add Publisher</Typography>
                    <Grid container spacing={3} component="form" onSubmit={onSubmit} autoComplete='off'>
                        <Grid item xs={12}>
                            <TextField
                                
                                type="text"
                                label="Name"
                                fullWidth
                                value={values.name}
                                onChange={onChange("name")}
                                error={errors.name !== undefined}
                                helperText={errors.name}
                                focused
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                
                                type="text"
                                label="Road"
                                fullWidth
                                value={values.road}
                                onChange={onChange("road")}
                                error={errors.name !== undefined}
                                helperText={errors.name}
                                focused
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                
                                type="text"
                                label="City"
                                fullWidth
                                value={values.city}
                                onChange={onChange("city")}
                                error={errors.name !== undefined}
                                helperText={errors.name}
                                focused
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                
                                id="city"
                                label="ZIP Code"
                                fullWidth
                                type="text"
                                value={values.zipCode}
                                onChange={onChange("zipCode")}
                                error={errors.name !== undefined}
                                helperText={errors.name}
                                focused
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                
                                id="state"
                                name="state"
                                label="Country"
                                type="text"
                                fullWidth
                                value={values.country}
                                onChange={onChange("country")}
                                error={errors.country !== undefined}
                                helperText={errors.country}
                                focused
                            />
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
                </Paper>
            </Container>
        </div >
    )

};

export default AddPublisher