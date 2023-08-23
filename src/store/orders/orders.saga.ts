import { takeLatest, put, all, call } from "redux-saga/effects";

import * as OrdersTypes from "./orders.types";

import * as OrdersActions from "./orders.action";
import { openAlert } from "../alert/alert.actions";

import axiosConfig from "src/config/axios.config";

export function* getOrdersOfVendorAsync() {
    try {
        const { data } = yield axiosConfig.get("/api/orders/view-orders/vendor");
        yield put(OrdersActions.getOrdersVendorsSuccess(data?.vendorOrders));
    } catch (error:any) {
        yield put(OrdersActions.getOrdersVendorsFailure(error));
        yield put(openAlert(error.response.data.message, "error"));
    }
}

export function* watchGetOrdersOfVendor() {
  yield takeLatest(OrdersTypes.GET_ORDERS_OF_VENDOR_START, getOrdersOfVendorAsync);
}

export function* ordersSagas() {
  yield all([
    watchGetOrdersOfVendor()
  ]);
}