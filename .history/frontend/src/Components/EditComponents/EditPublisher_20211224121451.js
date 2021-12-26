import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { getPublisherInfo } from '../../ApiService/publisherApi';


const useStyles = makeStyles({
    button: {
        minHeight: "50px",
        '&:hover': {
            background: "rgba(0, 0, 0, 0.3)!important"
        }
    }
})




const EditPublisher = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const { publisherId } = useParams()
    const [errors, setErrors] = useState({})


    useEffect(() => {
        getPublisherInfo(publisherId).then(res => {
            setValues({
                name: res.name,
                road: res.address.road,
                zipCode: res.address.zipCode,
                city: res.address.city,
                country: res.address.country,
            })
        }).catch(err => console.log(err))
    }, [publisherId])

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

    const onSubmit = (e) => {
        let errorObject = {}
        e.preventDefault()
        for (var key in values) {
            if (values[key] === "")
                errorObject[key]: 
        }
    }


    const onGoBackClick = () => {
        navigate(`/publisherDashboard`);
    }

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
                                error={values.name === ""}
                                helperText={values.name === "" ? "Name is required" : ""}
                                color={values.name !== "" ? "success" : ""}
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
                                error={values.road === ""}
                                helperText={values.road === "" ? "Road is required" : ""}
                                color={values.road !== "" ? "success" : ""}
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
                                error={values.city === ""}
                                helperText={values.city === "" ? "City is required" : ""}
                                color={values.city !== "" ? "success" : ""}
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
                                error={values.zipCode === ""}
                                helperText={values.zipCode === "" ? "Zip Code is required" : ""}
                                color={values.zipCode !== "" ? "success" : ""}
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
                                error={values.country === ""}
                                helperText={values.country === "" ? "Country is required" : ""}
                                color={values.country !== "" ? "success" : ""}
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
    );
};

export default EditPublisher;