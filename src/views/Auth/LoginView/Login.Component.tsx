import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
// import Image from "next/image";
// import Link from "next/link";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import * as Yup from "yup";
import container from "./Login.Container";
import { TextField } from "formik-mui";

import gharpaluwaIcon from "src/assets/images/gharpaluwa.com.svg";

import Checked from "src/assets/images/checked.svg";
import UnChecked from "src/assets/images/unchecked.svg";

function LoginView({ onSigninStart }: any) {
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
    width: "440px",
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
          height: "100vh",
          width: "100vw",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={6}>
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
          </Grid>

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
                  <Typography sx={{ ...loginTitle }}>Log in</Typography>
                  <Typography sx={{ ...loginSubTitle }}>
                    Welcome back! Please enter your details
                  </Typography>
                </Box>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string().required("Required"),
                    password: Yup.string()
                      .required("Password Required")
                      .matches(
                        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
                        "Password must be at least 6 characters long and contain at least 1 special character, uppercase, lowercase, and a number."
                      ),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    onSigninStart(values, () => {
                      setSubmitting(true);
                      navigate("/manage/dashboard");
                    });
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Box>
                        <Typography sx={{ ...miniTitle }}>Email</Typography>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          fullWidth
                          component={TextField}
                          sx={{ marginBottom: "20px", ...textField }}
                        />
                      </Box>

                      <Box>
                        <Typography sx={{ ...miniTitle }}>Password</Typography>
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

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "8px" }}>
                          <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            icon={
                              <img
                                src={UnChecked}
                                height={17}
                                width={17}
                                alt="unchecked"
                                style={{ color: theme.palette.primary.light }}
                              />
                            }
                            checkedIcon={
                              <img
                                src={Checked}
                                height={17}
                                width={17}
                                alt="checked"
                              />
                            }
                            sx={{ marginTop: "2px" }}
                          />
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "20px",
                              marginTop: "1px",
                            }}
                          >
                            Remember
                          </Typography>
                        </Box>
                        <Box>
                          <Link to="#" style={{ textDecoration: "none" }}>
                            <Typography
                              sx={{
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "#1366D9",
                              }}
                            >
                              Forgot Password
                            </Typography>
                          </Link>
                        </Box>
                      </Box>

                      {isSubmitting && <LinearProgress />}

                      <Box sx={{ marginTop: "24px" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isSubmitting}
                          fullWidth
                        >
                          Sign in
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          marginTop: "20px",
                        }}
                      >
                        <Box>
                          <Link
                            to="/register"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "#1366D9",
                              }}
                            >
                              Create New Account ?
                            </Typography>
                          </Link>
                        </Box>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default container(LoginView);
