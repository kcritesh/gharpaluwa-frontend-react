import { takeLatest, call, put, all } from "redux-saga/effects";

import * as categoryActions from "./categories.actions";
import * as CategoryType from "./categories.types";

import axiosConfig from "../../config/axios.config";

import { openAlert } from "../alert/alert.actions";

function* listAllCategoryStartAsync() {
    try {
        const { data } = yield axiosConfig.get("/api/category/list-all-category");
        yield put(categoryActions.listAllCategorySuccess(data));
    } catch (error) {
        yield put(categoryActions.listAllCategoryFail(error));
        yield put(openAlert(error.response.data.message, "error"));
    }
}

function* listCategoryStartAsync() {
    try {
        const { data } = yield axiosConfig.get("api/category/listAll/categoryOnly");
        yield put(categoryActions.listCategoriesSuccess(data));
    } catch (error) {
        yield put(categoryActions.listCategoriesFail(error));
        yield put(openAlert(error.response.data.message, "error"));
    }
}


function* watchListAllCategoryStartAsync() {
    yield takeLatest(CategoryType.LIST_ALL_CATEGORY_START, listAllCategoryStartAsync);
}

function* watchListCategoryStartAsync() {
    yield takeLatest(CategoryType.LIST_CATEGORY_START, listCategoryStartAsync);
}

export function* categoriesSagas() {
    yield all([
        call(watchListAllCategoryStartAsync),
        call(watchListCategoryStartAsync),
    ]);
}
