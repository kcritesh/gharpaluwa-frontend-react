import { boolean } from "yup";
import { IAuthState } from "../interfaces";
import * as AuthType from "./auth.types";

// Initial state object for the authentication reducer
const INITIAL_STATE: IAuthState = {
  isAuthenticated: null,
  currentUser: {},
  error: null,
  loading: false,
  authLoading: true,
  resetPasswordLoading: false,
  resetPasswordRequestLoading: false,
  resetPasswordRequestSuccess: false,
  resetPasswordSuccess: false,
};

// Reducer function responsible for managing the authentication state
const authReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case AuthType.SIGN_IN_START:
    case AuthType.LOAD_USER_START:
    case AuthType.REGISTER_START:
      return {
        ...state,
        loading: true,
      };

    case AuthType.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: payload,
        loading: false,
        authLoading: false,
      };
    case AuthType.REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        loading: false,
        authLoading: false,
      };

    case AuthType.REGISTER_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
        authLoading: false,
      };

    case AuthType.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: payload?.user,
        loading: false,
        authLoading: false,
      };

    case AuthType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: null,
        authLoading: false,
        currentUser: {},
        error: null,
      };

    case AuthType.RESET_PASSWORD_REQUEST_START:
      return {
        ...state,
        resetPasswordRequestLoading: true,
      };

    case AuthType.RESET_PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        resetPasswordRequestLoading: false,
        resetPasswordRequestSuccess: true,
      };

    case AuthType.RESET_PASSWORD_REQUEST_FAILURE:
      return {
        ...state,
        resetPasswordRequestLoading: false,
        resetPasswordRequestSuccess: false,
        error: payload,
      };

    case AuthType.RESET_PASSWORT_START:
      return {
        ...state,
        resetPasswordLoading: true,
      };

    case AuthType.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordSuccess: true,
      };

    case AuthType.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPasswordLoading: false,
      };
    case AuthType.LOAD_USER_FAILURE:
    case AuthType.SIGN_IN_FAILURE:
    case AuthType.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        authLoading: false,
        isAuthenticated: null,
      };

    default:
      return state;
  }
};

export default authReducer;
