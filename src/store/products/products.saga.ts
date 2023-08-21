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

export function* fetchProductByIdAsync({ payload: productId }: any) {
    try {
        const { data } = yield axiosConfig.get(`/api/products/${productId}`);
        yield put(ProductActions.fetchProductByIdSuccess(data.product));
    } catch (error:any) {
        yield put(ProductActions.fetchProductByIdError(error));
        yield put(openAlert(error.response.data.message, "error"));
    }
}

export function* createProductAsync({payload: {formData, cb}}: any){
  try {
    yield axiosConfig.post("/api/products", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    yield put(ProductActions.createProductSuccess());
    yield put(ProductActions.fetchUserProducts());
    yield put(openAlert("Product created successfully", "success"));
    if(cb) {
      cb()
    };
  } catch (error) {
    yield put(ProductActions.createProductFailure(error));
  }
}

export function* updateProductAsync({payload: {id,formData, cb}}: any){
  try {
    yield axiosConfig.put(`/api/products/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    yield put(ProductActions.updateProductSuccess());
    yield put(ProductActions.fetchUserProducts());
    yield put(openAlert("Product updated successfully", "success"));
    if(cb) {
      cb()
    };
  } catch (error) {
    yield put(ProductActions.updateProductFailure(error));
  }
}

export function* deleteProductAsync({payload: id }: any){
  try {
    yield axiosConfig.delete(`/api/products/${id}`);
    yield put(ProductActions.deleteProductSuccess(id));
    yield put(ProductActions.fetchUserProducts());
    yield put(openAlert("Product deleted successfully", "success"));
  } catch (error) {
    yield put(ProductActions.deleteProductError(error));
  }
}

export function* watchFetchUserProductsStart() {
  yield takeLatest(
    ProductTypes.GET_PRODUCTS_OF_USER_START,
    fetchUserProductsAsync
  );
}

export function* watchFetchProductByIdStart() {
  yield takeLatest(
    ProductTypes.GET_PRODUCT_BY_ID_START,
    fetchProductByIdAsync
  );
}

export function* watchCreateProductStart() {
  yield takeLatest(ProductTypes.CREATE_PRODUCT_START, createProductAsync);
}

export function* watchUpdateProductStart() {
  yield takeLatest(ProductTypes.UPDATE_PRODUCT_START, updateProductAsync);
}

export function* watchDeleteProduct(){
  yield takeLatest(ProductTypes.DELETE_PRODUCT_START, deleteProductAsync)
}

export function* productSagas() {
  yield all([
    call(watchFetchUserProductsStart), 
    call(watchDeleteProduct),
    call(watchCreateProductStart), 
    call(watchUpdateProductStart),
    call(watchFetchProductByIdStart)
  ]);
}