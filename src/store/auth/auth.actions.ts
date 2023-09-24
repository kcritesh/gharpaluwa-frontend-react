import * as AuthType from "./auth.types";

// Load user
export const loadUserStart = () => ({
  type: AuthType.LOAD_USER_START,
});

export const loadUserSuccess = (currentUser) => ({
  type: AuthType.LOAD_USER_SUCCESS,
  payload: currentUser,
});

export const loadUserFail = (error) => ({
  type: AuthType.LOAD_USER_FAILURE,
  payload: error,
});

// Login User
export const signinStart = (formData, cb) => ({
  type: AuthType.SIGN_IN_START,
  payload: { formData, cb },
});

export const signinSuccess = (currentUser) => ({
  type: AuthType.SIGN_IN_SUCCESS,
  payload: currentUser,
});

export const signinFail = (error) => ({
  type: AuthType.SIGN_IN_FAILURE,
  payload: error,
});

// Register user
export const registerStart = (formData, cb) => ({
  type: AuthType.REGISTER_START,
  payload: { formData, cb },
});

export const registerSuccess = (currentUser) => ({
  type: AuthType.REGISTER_SUCCESS,
  payload: currentUser,
});

export const registerFail = (error) => ({
  type: AuthType.REGISTER_FAILURE,
  payload: error,
});

// Logout the user
export const signoutStart = (cb) => ({
  type: AuthType.SIGN_OUT_START,
  payload: { cb },
});

export const signoutSuccess = () => ({
  type: AuthType.SIGN_OUT_SUCCESS,
});

export const signoutFail = (error: any) => ({
  type: AuthType.SIGN_OUT_FAILURE,
  payload: error,
});

// Reset password request
export const resetPasswordRequestStart = (email, cb) => ({
  type: AuthType.RESET_PASSWORD_REQUEST_START,
  payload: { email, cb },
});

export const resetPasswordRequestSuccess = () => ({
  type: AuthType.RESET_PASSWORD_REQUEST_SUCCESS,
});

export const resetPasswordRequestFail = (error) => ({
  type: AuthType.RESET_PASSWORD_REQUEST_FAILURE,
  payload: error,
});

// Reset password
export const resetPasswordStart = (formData, cb) => ({
  type: AuthType.RESET_PASSWORT_START,
  payload: { formData, cb },
});

export const resetPasswordSuccess = () => ({
  type: AuthType.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFail = (error) => ({
  type: AuthType.RESET_PASSWORD_FAILURE,
  payload: error,
});

// Verify OTP
export const verifyOTPStart = (formData, cb) => ({
  type: AuthType.VERIFY_OTP_START,
  payload: { formData, cb },
});

export const verifyOTPSuccess = () => ({
  type: AuthType.VERIFY_OTP_SUCCESS,
});

export const verifyOTPFail = (error) => ({
  type: AuthType.VERIFY_OTP_FAILURE,
  payload: error,
});
