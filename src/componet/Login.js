import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link as Linked } from "react-router-dom";
import { Link } from "@material-ui/core";
import { loginRegister } from "../service/LoginRegister";
import { userSearch } from "../service/LoginRegister";
import { useDispatch } from "react-redux";
import { setType } from "../states/Type";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [errMessage, setErrMessage] = useState();
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async(data, e) => {
    e.preventDefault();
    const respuestaClusterby = await loginRegister(data)
      setErrMessage(respuestaClusterby);
      if(!respuestaClusterby.success) return alert(respuestaClusterby.message)

    /*
    userSearch().then((res)=> res.user).then(res =>{
      console.log(res)
      if (res.type) {
        dispatch(setType(res.type))
        localStorage.setItem("type", res.type)
        navigate(`/${res.type}`)
    }
      else {navigate("/chooseUser")};
    });
    */
   const {user} = await userSearch()
   if(user.type){
    localStorage.setItem("type", user.type)
    dispatch(setType(user.type))
    navigate(`/${user.type}`)
  }else{
    navigate("/chooseUser")
  }

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
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

          <TextField
            {...register("password", { required: "This is required." })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errMessage && !errMessage.success && (
            <Typography color="error">*{errMessage.message}</Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Linked to="/register">{"Don't have an account? Sign Up"}</Linked>
            </Grid>
            <Grid item>
              <Linked to="/requestpasswordchange">
                {"Can´t remember your passworkd? Ask for a new one"}
              </Linked>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
