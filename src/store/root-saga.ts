// Redux Saga Import
import { all, call } from "redux-saga/effects";

// Project imports
import  { authSagas } from "./auth/auth.sagas";
import { productSagas } from "./products/products.saga";

// import { settingsSagas } from "./settings/settings.sagas";


export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(productSagas),
    // call(settingsSagas)
  ]);
}