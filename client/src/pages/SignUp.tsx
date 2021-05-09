import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  NAME,
  EMAIL,
  PASSWORD,
  CONFIRMED_PASSWORD,
  isEmailValid,
  isConfirmedPasswordSameAsPassword,
} from "../utils/formValidation";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
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
  const classes = useStyles();
  const [formState, setFormState] = useState({
    [NAME]: "",
    [EMAIL]: "",
    [PASSWORD]: "",
    [CONFIRMED_PASSWORD]: "",
  });

  const [hasFocusedThis, setHasFocusedThis] = useState({
    [NAME]: false,
    [EMAIL]: false,
    [PASSWORD]: false,
    [CONFIRMED_PASSWORD]: false,
  });

  const submitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    alert("Form submitted.");
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
        <form className={classes.form} onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                onChange={(e) =>
                  setFormState((state) => ({
                    ...state,
                    [NAME]: e.target.value,
                  }))
                }
                value={formState[NAME]}
                onBlur={() => {
                  if (!hasFocusedThis[NAME])
                    setHasFocusedThis((state) => ({
                      ...state,
                      [NAME]: true,
                    }));
                }}
                error={hasFocusedThis[NAME] && !formState[NAME]}
                helperText={
                  hasFocusedThis[NAME] && !formState[NAME] && "Name required"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                type="email"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setFormState((prevFormState) => {
                    return { ...prevFormState, [EMAIL]: e.target.value };
                  })
                }
                value={formState[EMAIL]}
                onBlur={() => {
                  if (!hasFocusedThis[EMAIL])
                    setHasFocusedThis((state) => ({
                      ...state,
                      [EMAIL]: true,
                    }));
                }}
                error={hasFocusedThis[EMAIL] && !isEmailValid(formState[EMAIL])}
                helperText={
                  hasFocusedThis[EMAIL] &&
                  !isEmailValid(formState[EMAIL]) && (
                    <>
                      {formState[EMAIL].includes("@")
                        ? "Not in valid format"
                        : "@ is required"}
                    </>
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setFormState((state) => ({
                    ...state,
                    [PASSWORD]: e.target.value,
                  }))
                }
                onBlur={() => {
                  if (!hasFocusedThis[PASSWORD])
                    setHasFocusedThis((state) => ({
                      ...state,
                      [PASSWORD]: true,
                    }));
                }}
                value={formState[PASSWORD]}
                error={hasFocusedThis[PASSWORD] && !formState[PASSWORD]}
                helperText={
                  hasFocusedThis[PASSWORD] &&
                  !formState[PASSWORD] &&
                  "Password required"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                onChange={(e) =>
                  setFormState((state) => ({
                    ...state,
                    [CONFIRMED_PASSWORD]: e.target.value,
                  }))
                }
                value={formState[CONFIRMED_PASSWORD]}
                onBlur={() => {
                  if (!hasFocusedThis[CONFIRMED_PASSWORD])
                    setHasFocusedThis((state) => ({
                      ...state,
                      [CONFIRMED_PASSWORD]: true,
                    }));
                }}
                error={
                  hasFocusedThis[CONFIRMED_PASSWORD] &&
                  !!formState[PASSWORD] &&
                  isConfirmedPasswordSameAsPassword({
                    confirmedPassword: formState[CONFIRMED_PASSWORD],
                    password: formState[PASSWORD],
                  })
                }
                helperText={
                  hasFocusedThis[CONFIRMED_PASSWORD] &&
                  formState[PASSWORD] &&
                  isConfirmedPasswordSameAsPassword({
                    confirmedPassword: formState[CONFIRMED_PASSWORD],
                    password: formState[PASSWORD],
                  }) &&
                  "Does not match password"
                }
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
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Log in
              </Link>
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
