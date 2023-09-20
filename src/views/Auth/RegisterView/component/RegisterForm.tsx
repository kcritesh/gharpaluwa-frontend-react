import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Field, Form } from "formik";
import { TextField } from "formik-mui";
import React from "react";

interface Props {
  miniTitle: any;
  textField: any;
  isSubmitting: boolean;
}

const RegisterForm = ({ miniTitle, textField, isSubmitting }: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Form>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography sx={{ ...miniTitle }}>First Name*</Typography>
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
            <Typography sx={{ ...miniTitle }}>Last Name*</Typography>
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
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography sx={{ ...miniTitle }}>Phone*</Typography>
            <Field
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              fullWidth
              component={TextField}
              sx={{ marginBottom: "20px", ...textField }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography sx={{ ...miniTitle }}>Username*</Typography>
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
            <Typography sx={{ ...miniTitle }}>Password*</Typography>
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
            <Typography sx={{ ...miniTitle }}>Confirm Password*</Typography>
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography sx={{ ...miniTitle }}>Address*</Typography>
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
  );
};

export default RegisterForm;
