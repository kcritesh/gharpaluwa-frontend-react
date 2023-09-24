import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import container from "./Dashboard.Container";
import DialogComponent from "src/components/DialogComponent";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import axiosConfig from "src/config/axios.config";
import { openAlert } from "src/store/alert/alert.actions";
import { useDispatch } from "react-redux";

interface DashboardProps {
  auth: {
    currentUser: {
      firstName: string;
      lastName: string;
      email: string;
      address: string;
      isEmailVerified: boolean;
      isPhoneVerified: boolean;
    };
  };
  onSignOutStart: (callback: () => void) => void;
}

const Dashboard = ({
  auth: { currentUser },
  onSignOutStart,
}: DashboardProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the timer
  const sendOtp = () => {
    setIsRunning(true);
    axiosConfig
      .post("/api/auth/send-phone-verification")
      .then(() => {
        console.log(timeLeft)
        setTimeLeft((prev) => (prev === 0 ? 30 : prev));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(openAlert(err.response.data, "error"));
        setTimeLeft(0);
      });
  };

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setTimeLeft(30);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  return (
    <>
      <DialogComponent
        open={open}
        handleClose={handleClose}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <Box sx={{ padding: "53px 51px" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              color: theme.palette.text.secondary,
              marginBottom: "43px",
            }}
          >
            Verify Phone
          </Typography>

          <Formik
            initialValues={{
              otp: "",
            }}
            onSubmit={(values, formikHelpers) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={1} sx={{ marginTop: "40px" }}>
                  <Grid item xs={12}>
                    <Box sx={{ padding: "10px 0px 10px 0px" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: theme.palette.text.disabled,
                        }}
                      >
                        OTP
                      </Typography>
                      <Field
                        name="otp"
                        component={TextField}
                        variant="outlined"
                        sx={{
                          '& input[type="number"]': {
                            appearance: "textfield",
                            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":
                              {
                                display: "none",
                              },
                            MozAppearance: "textfield",
                            "&::-moz-inner-spin-button, &::-moz-outer-spin-button":
                              {
                                display: "none",
                              },
                          },
                          marginTop: "8px",
                          width: "100%",

                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "48px",
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "43px",
                    width: "100%",
                  }}
                >
                  {timeLeft < 30 ? (
                    <Typography sx={{ fontSize: "10px" }}>
                      You can resend code in {timeLeft} seconds
                    </Typography>
                  ) : null}
                  <Box>
                    <Button
                      variant="outlined"
                      onClick={sendOtp}
                      disabled={isRunning || timeLeft <= 0}
                      sx={{
                        width: "100px",
                        height: "40px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "16px",
                        color: "black",
                        mr: "10px",
                      }}
                    >
                      Send Otp
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        width: "100px",
                        height: "40px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "16px",
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Uploading" : "Save"}
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </DialogComponent>
      <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
        <h1>Dashboard</h1>
        <p>
          Hi {currentUser?.firstName} {currentUser?.lastName}!
        </p>
        <p>You have been logged in!</p>
        <p>Email : {currentUser?.email}</p>
        <p>Address : {currentUser?.address}</p>
        <p>
          Email Verified :{" "}
          {currentUser?.isEmailVerified
            ? " You are an verified User!"
            : " You are not verified! Please check email"}
        </p>
        <p>
          Phone Verified :{" "}
          {currentUser?.isPhoneVerified
            ? " You are an verified User!"
            : " You are not verified! Please verify phone number"}
        </p>
        {!currentUser?.isPhoneVerified && (
          <Button onClick={handleClickOpen} variant="contained">
            Verify Phone
          </Button>
        )}

        <Button
          variant="contained"
          sx={{ mt: "13px" }}
          onClick={() => {
            onSignOutStart(() => {
              console.log("Sign out successful");
            });
          }}
        >
          Sign Out
        </Button>
      </Box>
    </>
  );
};

export default container(Dashboard);
