import { IAuthState } from "../interfaces";
import * as AuthType from "./auth.types";

// Initial state object for the authentication reducer
const INITIAL_STATE: IAuthState = {
  isAuthenticated: null,
  currentUser: {},
  error: null,
  loading: false,
  authLoading: true,
};

// Reducer function responsible for managing the authentication state
const authReducer = (state = INITIAL_STATE, action) => {
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
      return{
        ...state,
        currentUser: payload,
        loading: false,
        authLoading: false,
      }
    
    case AuthType.REGISTER_FAILURE:
      return{
        ...state,
        error: payload,
        loading: false,
        authLoading: false,
      }

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

    case AuthType.LOAD_USER_FAILURE:
    case AuthType.SIGN_IN_FAILURE:
    case AuthType.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        authLoading: false,
        isAuthenticated: null
      };

    default:
      return state;
  }
};

export default authReducer;