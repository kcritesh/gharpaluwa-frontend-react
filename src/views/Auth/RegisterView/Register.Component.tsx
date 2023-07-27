import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
// import Image from "next/image";
// import Link from "next/link";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import * as Yup from "yup";
import container from "./Register.Container";
import { TextField } from "formik-mui";

import gharpaluwaIcon from "src/assets/images/gharpaluwa.com.svg";

import Checked from "src/assets/images/checked.svg";
import UnChecked from "src/assets/images/unchecked.svg";

function RegisterView({ onRegisterStart }: any) {
  const theme = useTheme();

  const wrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const title = {
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "28px",
    textAlign: "center",
    color: theme.palette.text.primary,
  };
  // const government = {
  //   fontWeight: 700,
  //   fontSize: "24px",
  //   lineHeight: "28px",
  //   color: theme.palette.text.secondary,
  // };
  const loginCard = {
    display: "flex",
    flexDirection: "column",
    width: "700px",
    minHeight: "510px",
    background: "#fff",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    padding: "40px",
  };
  const loginTitle = {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "38px",
    marginBottom: "12px",
    color: theme.palette.text.secondary,
  };
  const loginSubTitle = {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "32px",
    color: theme.palette.text.primary,
  };
  const miniTitle = {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    marginBottom: "6px",
    color: theme.palette.text.disabled,
  };
  const textField = {
    "& .MuiOutlinedInput-root": {
      height: "44px",
    },
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setChecked(event.target.checked);
  };

  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Box sx={{ ...wrapper }}>
              <Box sx={{ ...loginCard }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ ...loginTitle }}>Register</Typography>
                  <Typography sx={{ ...loginSubTitle }}>
                    Please fill in the form to create an account
                  </Typography>
                </Box>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    username: "",
                    address: "",
                    password: "",
                    confirmPassword: "",
                    roles: "seller",
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required("First Name is required."),
                    lastName: Yup.string().required("Last Name is required."),
                    email: Yup.string()
                      .email("Invalid email address.")
                      .required("Email is required."),
                    username: Yup.string().required("Username is required."),
                    address: Yup.string().required("Address is required."),
                    password: Yup.string()
                      .required("Password Required")
                      .matches(
                        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
                        "Password must be at least 6 characters long and contain at least 1 special character, uppercase, lowercase, and a number."
                      ),
                    confirmPassword: Yup.string()
                      .oneOf(
                        [Yup.ref("password"), null],
                        "Passwords must match."
                      )
                      .required("Confirm Password is required."),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    onRegisterStart(values, () => {
                      setSubmitting(false);
                      navigate("/login");
                    });
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Grid container columnSpacing={2}>
                        <Grid item xs={12} lg={6}>
                          <Box>
                            <Typography sx={{ ...miniTitle }}>
                              First Name*
                            </Typography>
                            <Field
                              type="text"
                              name="firstName"
                              placeholder="Enter your first name"
                              fullWidth
                              component={TextField}
                              sx={{ marginBottom: "20px", ...textField }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <Box>
                            <Typography sx={{ ...miniTitle }}>
                              Last Name*
                            </Typography>
                            <Field
                              type="text"
                              name="lastName"
                              placeholder="Enter your last name"
                              fullWidth
                              component={TextField}
                              sx={{ marginBottom: "20px", ...textField }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <Box>
                            <Typography sx={{ ...miniTitle }}>
                              Email*
                            </Typography>
                            <Field
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              fullWidth
                              component={TextField}
                              sx={{ marginBottom: "20px", ...textField }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <Box>
                            <Typography sx={{ ...miniTitle }}>
                              Username*
                            </Typography>
                            <Field
                              type="text"
                              name="username"
                              placeholder="Enter your username"
                              fullWidth
                              component={TextField}
                              sx={{ marginBottom: "20px", ...textField }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          {" "}
                          <Box>
                            <Typography sx={{ ...miniTitle }}>
                              Password*
                            </Typography>
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Password"
                              fullWidth
                              component={TextField}
                              sx={{ marginBottom: "24px", ...textField }}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          {" "}
                          <Box>
                            <Typography sx={{ ...miniTitle }}>
                              Confirm Password*
                            </Typography>
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="confirmPassword"
                              placeholder="Confirm Password"
                              fullWidth
                              component={TextField}
                              sx={{ marginBottom: "24px", ...textField }}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box>
                            <Typography sx={{ ...miniTitle }}>
                              Address*
                            </Typography>
                            <Field
                              type="text"
                              name="address"
                              placeholder="Enter your Address"
                              fullWidth
                              component={TextField}
                              sx={{
                                marginBottom: "20px",
                                ...textField,
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      {isSubmitting && <LinearProgress />}

                      <Box sx={{ marginTop: "24px" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isSubmitting}
                          fullWidth
                        >
                          Register
                        </Button>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box sx={{ ...wrapper }}>
                <Typography sx={{ ...title }}>
                  Gharpaluwa Dashboard <br />
                </Typography>

                <img
                  src={gharpaluwaIcon}
                  width="300px"
                  // height="202px"
                  alt="Cot of Arms"
                  style={{ marginTop: "44px" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default container(RegisterView);
