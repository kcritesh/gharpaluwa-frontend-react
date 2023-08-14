import { takeLatest, put, all, call } from "redux-saga/effects";

import * as ProductTypes from "./products.types";

import * as ProductActions from "./products.action";
import { openAlert } from "../alert/alert.actions";

import axiosConfig from "src/config/axios.config";

export function* fetchUserProductsAsync() {
    try {
        const { data } = yield axiosConfig.get("/api/products/getallproducts/vendor");
        yield put(ProductActions.fetchUserProductsSuccess(data));
    } catch (error:any) {
        yield put(ProductActions.fetchUserProductsError(error));
        yield put(openAlert(error.response.data.message, "error"));
    }
}

export function* watchFetchUserProductsStart() {
  yield takeLatest(
    ProductTypes.GET_PRODUCTS_OF_USER_START,
    fetchUserProductsAsync
  );
}

export function* productSagas() {
  yield all([call(watchFetchUserProductsStart)]);
}