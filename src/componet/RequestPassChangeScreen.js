import React from 'react';

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Container,
    Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';


import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from 'react-router-dom';
import { requestPassword } from "../service/RequestPassword";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
    content: {
        minHeight: "calc(100vh - 300px)",
    }
}));

const RequestPassChangeScreen = () => {
    const classes = useStyles();

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {

        const userData = requestPassword(data);
        console.log(userData);
        navigate("/changepassword")
    }


    return (
        <>
            <Container component="main" maxWidth="xs" className={classes.content} >
                <CssBaseline />
                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <EmailIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4" align="center">
                        Forgot Password?
                    </Typography>
                    <Typography component="h6" style={{ textAlign: "center" }}>
                        Please enter your username below
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    {...register('username',
                                        {
                                            required: "Must enter a valid username."
                                        }
                                    )}
                                    name="username"
                                    variant="outlined"
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="username"
                                    render={({ message }) => <p>{message}</p>}
                                />
                            </Grid>



                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Ask for a new password
                        </Button>
                    </form>
                </div>
            </Container>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://mui.com/">
                        Your Website
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </footer>
            {/* End footer */}
        </>
    );
}

export default RequestPassChangeScreen;
