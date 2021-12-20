import React from 'react';
import { makeStyles } from '@mui/styles';
import Header from './Header';
import { Avatar, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';


const useStyles = makeStyles({

})


const OurTeam = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="md" component="main" sx={{ mt: 12 }}>
                <Typography variant='h2' mb={3}>Our Team</Typography>
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid
                        item
                        sm={6}
                        md={4}
                    >
                        <Card>
                            <Container sx={{ display: "flex", justifyContent: "center" }}>
                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/person1.jpg`} sx={{ width: 100, height: 100 }} />

                            </Container>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        George Clooney
                                    </Typography>


                                </Box>
                                <Typography variant="h6" color="text.secondary">
                                    Developer
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus lorem justo, sit amet faucibus lectus consectetur ac. Aliquam sollicitudin magna non ante vehicula dapibus.
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <Card>
                            <Container sx={{ display: "flex", justifyContent: "center" }}>
                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/person2.jpg`} sx={{ width: 100, height: 100 }} />

                            </Container>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        Meryl Streep
                                    </Typography>

                                </Box>
                                <Typography variant="h6" color="text.secondary">
                                    UI/UX Designer
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus lorem justo, sit amet faucibus lectus consectetur ac. Aliquam sollicitudin magna non ante vehicula dapibus.
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <Card>
                            <Container sx={{ display: "flex", justifyContent: "center" }}>
                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/person3.jpg`} sx={{ width: 100, height: 100 }} />

                            </Container>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        Antonui banderas
                                    </Typography>

                                </Box>
                                <Typography variant="h6" color="text.secondary">
                                    QA Engineer
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus lorem justo, sit amet faucibus lectus consectetur ac. Aliquam sollicitudin magna non ante vehicula dapibus.
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

};

export default OurTeam;