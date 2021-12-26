import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Header from './Header';
import { Button, Container, Grid, Typography, TextField, Paper } from '@mui/material';


const useStyles = makeStyles({
    button: {
        minHeight: "50px",
        '&:hover': {
            background: "rgba(0, 0, 0, 0.3)!important"
        }
    }
})




const AddPublisher = () => {
    const classes = useStyles();

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

    const onSubmit = () =>{
        
    }
    return (
        <div>
            <Header />
            <Container maxWidth="sm" component="main" sx={{ mt: 12, mb: 5 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography variant='h2' mb={3}>Add Publisher</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="text"
                                label="Name"
                                fullWidth
                                value={values.name}
                                onChange={onChange("name")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="text"
                                label="Road"
                                fullWidth
                                value={values.road}
                                onChange={onChange("road")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="text"
                                label="City"
                                fullWidth
                                value={values.city}
                                onChange={onChange("city")}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                label="ZIP Code"
                                fullWidth
                                type="text"
                                value={values.zipCode}
                                onChange={onChange("zipCode")}

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

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" component="span" fullWidth className={classes.button} sx={{ background: "#50C878" }}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" component="span" fullWidth className={classes.button}>
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