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
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ResetPasswordRequest = ({
  miniTitle,
  textField,
  Title,
  SubTitle,
  onResetPassReqStart,
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
          Please fill in the email you used in your account
        </Typography>
      </Box>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address.")
            .required("Email is required."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          onResetPassReqStart(values.email, () => {
            setSubmitting(false);
            navigate("/login");
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container columnSpacing={2}>
              <Grid item xs={12}>
                <Box>
                  <Typography sx={{ ...miniTitle }}>Email*</Typography>
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
            </Grid>
            {isSubmitting && <LinearProgress />}

            <Box sx={{ marginTop: "24px" }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                fullWidth
              >
                Reset Password Request
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPasswordRequest;
