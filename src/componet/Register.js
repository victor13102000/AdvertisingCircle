import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";
import { Link as Linked, useNavigate } from "react-router-dom";
import { registerFunction } from "../service/registerFunction";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const navigate = useNavigate();
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    registerFunction(data);
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                {...register("username", {
                  required: "This is required.",
                })}
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
                {...register("email", {
                  required: "This is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "input must be a valid email",
                  },
                })}
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", {
                  required: "This is required.",
                  minLength: 8,
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
                render={() => (
                  <p>password must be at least 8 character long </p>
                )}
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Linked to="/login">Already have an account? Sign in</Linked>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
