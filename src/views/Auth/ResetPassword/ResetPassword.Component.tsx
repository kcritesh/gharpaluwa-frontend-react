import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { Field, Form, Formik } from "formik";

import { useNavigate, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import container from "./ResetPassword.Container";

import ResetPasswordRequest from "./component/ResetPasswordRequest";
import React from "react";
import axiosConfig from "src/config/axios.config";
import { ErrorOutline } from "@mui/icons-material";
import ResetPasswordForm from "./component/ResetForm";

function RegisterView({ onResetPassReqStart, onResetPassStart }: any) {
  const theme = useTheme();

  const wrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 20px",
  };

  const registerCard = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    width: "100%",
    background: "#fff",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    padding: "40px",
  };
  const Title = {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "38px",
    marginBottom: "12px",
    color: theme.palette.text.secondary,
  };
  const SubTitle = {
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
  const [searchParams] = useSearchParams();
  const isResetPassword = searchParams.get("reset") === "true";
  const [isTokenValid, setIsTokenValid] = React.useState(false);
  const token = searchParams.get("token");
  React.useEffect(() => {
    if (!isResetPassword) return;
    axiosConfig
      .post(`/api/auth/verify-reset-password`, {
        resetToken: token,
      })
      .then((res) => {
        setIsTokenValid(true);
      })
      .catch((err) => {
        setIsTokenValid(false);
      });
  }, [isResetPassword]);

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
          <Grid item xs={12}>
            <Box sx={{ ...wrapper }}>
              <Box sx={{ ...registerCard }}>
                {!isResetPassword ? (
                  <ResetPasswordRequest
                    miniTitle={miniTitle}
                    textField={textField}
                    Title={Title}
                    SubTitle={SubTitle}
                    onResetPassReqStart={onResetPassReqStart}
                  />
                ) : isTokenValid ? (
                  <ResetPasswordForm
                    miniTitle={miniTitle}
                    textField={textField}
                    Title={Title}
                    SubTitle={SubTitle}
                    onResetPassStart={onResetPassStart}
                    resetToken={token}
                  />
                ) : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <ErrorOutline fontSize="large" />
                    </Box>
                    <Typography sx={{ ...SubTitle, mt: "10px" }}>
                      Link is expired or invalid !
                    </Typography>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/reset-password");
                        }}
                      >
                        Try Again
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default container(RegisterView);
