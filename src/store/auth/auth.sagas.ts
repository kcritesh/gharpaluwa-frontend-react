import { takeLatest, call, put, all } from "redux-saga/effects";

import * as authActions from "./auth.actions";
import * as AuthType from "./auth.types";

import axiosConfig, { setAuthToken } from "../../config/axios.config";
import { openAlert } from "../alert/alert.actions";

export function* loadUserAsync() {
  if (localStorage["access_token"]) {
    try {
      // Fetch user data from the API
      const { data: userData } = yield axiosConfig.get(`/api/user/load-user`);
      yield put(authActions.loadUserSuccess(userData));
    } catch (error) {
      localStorage.removeItem("access_token");
      yield put(authActions.loadUserFail(error));
    }
  } else {
    yield put(authActions.loadUserFail("No Access Token"));
    localStorage.removeItem("access_token");
  }
}

export function* onSigninAsync({ payload: { formData, cb } }: any) {
  try {
    // Send a sign-in request to the API
    const { data } = yield axiosConfig.post("/api/auth/login", {
      ...formData,
    });

    // Store access token in local storage
    localStorage.setItem("access_token", data?.accessToken);

    yield put(
      authActions.signinSuccess({
        data,
      })
    );
    if (cb) {
      yield cb();
    }

    yield put(authActions.loadUserStart());

    yield put(openAlert("User Signed In Successfully", "success"));
  } catch (err) {
    yield put(authActions.signinFail(err));
    yield put(openAlert(err.response.data.message, "error"));
  }
}

export function* onRegisterAsync({ payload: { formData, cb } }: any) {
  try {
    const { data } = yield axiosConfig.post("/api/auth/register", formData);
    yield put(authActions.registerSuccess(data));
    yield put(
      openAlert("User Registered Successfully! \nProceed to Sign In", "success")
    );
    if (cb) {
      yield cb();
    }
  } catch (error) {
    yield put(authActions.registerFail(error));
    yield put(openAlert(error.response.data.message, "error"));
  }
}

export function* signOutAsync({ payload: { cb } }: any) {
  try {
    yield put(authActions.signoutSuccess());

    localStorage.removeItem("access_token");
    yield put(openAlert("User Signed Out Successfully", "success"));
    if (cb) {
      yield cb();
    }
  } catch (err) {
    console.error(err);
    yield put(authActions.signoutFail(err));
    yield put(openAlert("Failed to sign out", "error"));
  }
}

export function* resetPasswordRequestAsync({ payload: { email, cb } }: any) {
  try {
    yield axiosConfig.post("/api/auth/reset-password-request", {
      email,
    });
    yield put(openAlert("Password reset link sent to your email", "success"));
    yield put(authActions.resetPasswordRequestSuccess());
    if (cb) {
      yield cb();
    }
  } catch (err) {
    yield put(authActions.resetPasswordRequestFail(err));
    yield put(openAlert(err.response.data.message, "error"));
  }
}

export function* resetPasswordAsync({ payload: { formData, cb } }: any) {
  try {
    yield axiosConfig.post("/api/auth/reset-password", 
      formData,
    );
    yield put(openAlert("Password reset successfully", "success"));
    yield put(authActions.resetPasswordSuccess());
    if (cb) {
      yield cb();
    }
  } catch (err) {
    yield put(authActions.resetPasswordFail(err));
    yield put(openAlert(err.response.data.message, "error"));
  }
}

export function* watchLoadUser() {
  yield takeLatest(AuthType.LOAD_USER_START, loadUserAsync);
}

export function* watchSignin() {
  yield takeLatest(AuthType.SIGN_IN_START, onSigninAsync);
}

export function* watchRegister() {
  yield takeLatest(AuthType.REGISTER_START, onRegisterAsync);
}

export function* watchSignout() {
  yield takeLatest(AuthType.SIGN_OUT_START, signOutAsync);
}

export function* watchResetPasswordRequest() {
  yield takeLatest(
    AuthType.RESET_PASSWORD_REQUEST_START,
    resetPasswordRequestAsync
  );
}

export function* watchResetPassword() {
  yield takeLatest(AuthType.RESET_PASSWORT_START, resetPasswordAsync);
}

export function* authSagas() {
  yield all([
    call(watchSignin),
    call(watchSignout),
    call(watchLoadUser),
    call(watchRegister),
    call(watchResetPasswordRequest),
    call(watchResetPassword),
  ]);
}
