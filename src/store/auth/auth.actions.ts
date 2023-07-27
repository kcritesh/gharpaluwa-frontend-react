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

// Logout the user
export const signoutStart = (cb) => ({
  type: AuthType.SIGN_OUT_START,
  payload: { cb },
});

export const signoutSuccess = () => ({
  type: AuthType.SIGN_OUT_SUCCESS,
});

export const signoutFail = (error:  any) => ({
  type: AuthType.SIGN_OUT_FAILURE,
  payload: error,
});

