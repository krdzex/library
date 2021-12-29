import React from 'react';
import { Avatar, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';




const OurTeam = () => {


    return (
        <div>
            <Container maxWidth="md" component="main" sx={{ mt: 12, mb: 5 }}>
                <Typography variant='h2' mb={3} align='center' color={"white"}>Our Team</Typography>
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}

                    >
                        <Card>
                            <Container sx={{ display: "flex", justifyContent: "center", mt: 4, minHeight: "100px" }}>
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
                                    <Typography component="h2" variant="h3" color="text.primary" align='center'>
                                        George Clooney
                                    </Typography>


                                </Box>
                                <Typography variant="h6" color="text.secondary" align='center' marginBottom={2}>
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
                            <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>

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
                                    <Typography component="h2" variant="h3" color="text.primary" align='center'>
                                        Meryl Streep
                                    </Typography>

                                </Box>
                                <Typography variant="h6" color="text.secondary" align='center' marginBottom={2}>
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
                            <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>

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
                                    <Typography component="h2" variant="h3" color="text.primary" align='center' >
                                        Antonui banderas
                                    </Typography>

                                </Box>
                                <Typography variant="h6" color="text.secondary" align='center' marginBottom={2}>
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