import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
require('dotenv').config()


const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  formItem: {
    width: "90%",
    maxWidth: 300,
    margin: 10,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 300,
    padding: 20,
  },
  title: {
    fontWeight: 900,
    fontSize: 40,
    paddingTop: 40,
    paddingBottom: 20,
    color: "#c2bbae",
  },
  backdrop: {
    zIndex: 99,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [signUp, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState([
    { email: "", password: "" },
    { name: "", email: "", password1: "", password2: "" },
  ]);

  let history = useHistory();

  const onSubmitSignUp = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(input[1]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${process.env.REACT_APP_DOMAIN}/dev/signUp/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const newToken = JSON.parse(result);
        Cookies.set("token", newToken.token);
        setLoading(false);
        history.push("/search");
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  const onSubmitSignIn = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(input[0]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${process.env.REACT_APP_DOMAIN}/dev/login/`, requestOptions)
      .then((response) => {
        return response.text();
      })
      .then((result) => {
        const newToken = JSON.parse(result);
        Cookies.set("token", newToken.token);
        setLoading(false);
        history.push("/search");
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };
  return (
    <Box className={classes.container}>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>
      <Paper className={classes.paper}>
        <Box className={classes.title}>{signUp ? "Sign up" : "Sign in"}</Box>
        {!signUp && (
          <>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                className={classes.formItem}
                id="outlined-basic"
                label="Email *"
                variant="outlined"
                value={input[0].email}
                onChange={(e) =>
                  setInput([
                    {
                      email: e?.target?.value?.toString(),
                      password: input[0].password,
                    },
                    ...input.slice(1),
                  ])
                }
              />
              <TextField
                className={classes.formItem}
                id="outlined-basic"
                label="Password *"
                variant="outlined"
                type={"password"}

                onChange={(e) =>
                  setInput([
                    {
                      email: input[0].email,
                      password: e?.target?.value?.toString(),
                    },
                    ...input.slice(1),
                  ])
                }
                value={input[0].password}
              />
              <Button
                className={classes.formItem}
                variant="contained"
                color="primary"
                onClick={onSubmitSignIn}
              >
                Log In
              </Button>
            </form>
            <Box className={classes.footer}>
              <Box onClick={() => history.push("/resetPassword")}>
                Forgot password?
              </Box>
              <Box onClick={() => setSignUp(true)}>Sign up</Box>
            </Box>
          </>
        )}
        {signUp && (
          <>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                className={classes.formItem}
                id="outlined-basic"
                label="Name *"
                variant="outlined"
                value={input[1].name}
                onChange={(e) =>
                  setInput([
                    ...input.slice(0, 1),
                    {
                      password1: input[1].password1,
                      password2: input[1].password2,
                      email: input[1].email,
                      name: e.target.value,
                    },
                  ])
                }
              />
              <TextField
                className={classes.formItem}
                id="outlined-basic"
                label="Email *"
                variant="outlined"
                value={input[1].email}
                onChange={(e) =>
                  setInput([
                    ...input.slice(0, 1),
                    {
                      password1: input[1].password1,
                      password2: input[1].password2,
                      name: input[1].name,
                      email: e.target.value,
                    },
                  ])
                }
              />
              <TextField
                className={classes.formItem}
                id="outlined-basic"
                label="Password *"
                type={"password"}

                variant="outlined"
                onChange={(e) =>
                  setInput([
                    ...input.slice(0, 1),
                    {
                      email: input[1].email,
                      password2: input[1].password2,
                      name: input[1].name,
                      password1: e.target.value,
                    },
                  ])
                }
                value={input[1].password1}
              />
              <TextField
                className={classes.formItem}
                id="outlined-basic"
                label="Repeat Password *"
                type={"password"}

                variant="outlined"
                onChange={(e) =>
                  setInput([
                    ...input.slice(0, 1),
                    {
                      email: input[1].email,
                      password1: input[1].password1,
                      name: input[1].name,
                      password2: e.target.value,
                    },
                  ])
                }
                value={input[1].password2}
              />
              <Button
                className={classes.formItem}
                variant="contained"
                color="primary"
                onClick={onSubmitSignUp}
              >
                Sign Up
              </Button>
            </form>
            <Box className={classes.footer}>
              <Box onClick={() => setSignUp(false)}>
                Already have an account?
              </Box>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default LoginPage;
