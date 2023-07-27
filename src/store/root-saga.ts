// Redux Saga Import
import { all, call } from "redux-saga/effects";

// Project imports
import  { authSagas } from "./auth/auth.sagas";

// import { settingsSagas } from "./settings/settings.sagas";


export default function* rootSaga() {
  yield all([
    call(authSagas),
   
    // call(settingsSagas)
  ]);
}