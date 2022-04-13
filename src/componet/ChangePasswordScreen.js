import React from 'react';
import {useRef} from 'react'
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
import swal from 'sweetalert';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from 'react-router-dom';
import { changePassword } from "../service/ChangePass";
import { useSelector } from "react-redux";

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

const ChangePasswordScreen = () => {
    const classes = useStyles();
    const type = useSelector((state) => state.type);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async(data) => {
        const user = await changePassword(data)
        
        if (user.success && (type[0])) {
             swal({
                title: "Password",
                icon: "success",
                button: "ok",
                text:"Change password successfully",
                timer: 2000
              })
            navigate(`/${type}`)
        }else if((user.success) && (!type[0])){
            navigate(`/chooseUser`)
        }else{
            swal({
                title: "Password",
                icon: "error",
                button: "ok",
                text:"your password has not been changed",
                timer: 2000
              })
        }
    }

    return (
        <>
            <Container component="main" maxWidth="xs" className={classes.content}>
                <CssBaseline />
                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Change Password
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    {...register('username',
                                        {
                                            required: "This is required."
                                        }
                                    )}
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="User Name"
                                    autoFocus
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="username"
                                    render={({ message }) => <p>{message}</p>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...register("code", {
                                        required: "This is required.",

                                    })}
                                    variant="outlined"
                                    fullWidth
                                    id="code"
                                    label="Code"
                                    name="code"
                                    autoComplete="code"
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="code"
                                    render={({ message }) => <p>{message}</p>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    {...register("password", {
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters"
                                          }
                                    })}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="password"
                                    render={({ message }) => <p>{message}</p>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    {...register("confirmpassword", {
                                        validate: value =>
                                            value === password.current || "The passwords do not match"
                                    })}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmpassword"
                                    label="confirmPassword"
                                    type="password"
                                    id="confirmpassword"
                                    autoComplete="current-password"
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="confirmpassword"
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
                            Change
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
                    {'Copyright Â© '}
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

export default ChangePasswordScreen;