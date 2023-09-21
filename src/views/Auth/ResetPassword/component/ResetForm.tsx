import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ResetPasswordForm = ({
  miniTitle,
  textField,
  Title,
  SubTitle,
  onResetPassStart,
  resetToken,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ ...Title }}>Reset Password</Typography>
        <Typography sx={{ ...SubTitle }}>
          Please fill in your new password
        </Typography>
      </Box>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          resetToken: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("Password Required")
            .matches(
              /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
              "Password must be at least 6 characters long and contain at least 1 special character, uppercase, lowercase, and a number."
            ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match.")
            .required("Confirm Password is required."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          onResetPassStart(values, () => {
            setSubmitting(false);
            navigate("/login");
          });
        }}
      >
        {({ isSubmitting, setFieldValue }) => {
          useEffect(() => {
            setFieldValue("resetToken", resetToken);
          }, [resetToken]);
          return (
            <Form>
              <Grid container columnSpacing={2}>
                <Grid item xs={12}>
                  <Box>
                    <Typography sx={{ ...miniTitle }}>Password*</Typography>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter your new password"
                      fullWidth
                      component={TextField}
                      sx={{ marginBottom: "20px", ...textField }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography sx={{ ...miniTitle }}>
                      Confirm Password*
                    </Typography>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your new password"
                      fullWidth
                      component={TextField}
                      sx={{ marginBottom: "20px", ...textField }}
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
                  Reset Password
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ResetPasswordForm;
