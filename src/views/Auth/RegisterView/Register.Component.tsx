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
import RegisterForm from "./component/RegisterForm";

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
  const registerCard = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "700px",
    minHeight: "510px",
    background: "#fff",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    padding: "40px",
  };
  const registerTitle = {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "38px",
    marginBottom: "12px",
    color: theme.palette.text.secondary,
  };
  const registerSubTitle = {
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
    '& input[type="number"]': {
      appearance: "textfield",
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        display: "none",
      },
      MozAppearance: "textfield",
      "&::-moz-inner-spin-button, &::-moz-outer-spin-button": {
        display: "none",
      },
    },
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
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ ...wrapper }}>
              <Box sx={{ ...registerCard }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ ...registerTitle }}>Register</Typography>
                  <Typography sx={{ ...registerSubTitle }}>
                    Please fill in the form to create an account
                  </Typography>
                </Box>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
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
                    phone: Yup.string()
                      .matches(
                        /^[0-9]+$/,
                        "Phone number must contain only digits"
                      )
                      .min(10, "Phone number must be more than 9 digits")
                      .max(15, "Phone number must be less than 15"),
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
                    <RegisterForm
                      isSubmitting={isSubmitting}
                      miniTitle={miniTitle}
                      textField={textField}
                    />
                  )}
                </Formik>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} display={{ xs: "none", md: "block" }}>
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
