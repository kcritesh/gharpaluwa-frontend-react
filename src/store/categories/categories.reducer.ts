import * as CategoryTypes from "./categories.types";
import { ICategoryState } from "../interfaces"

const INITIAL_STATE: ICategoryState = {
    categoriesAndSubCategories: [],
    categories: [],
    subCategories: [],
    subCategoriesByCategory: [],
    categoriesCount: 0,
    subCategoriesCount: 0,
    error: null,
    loading: false,
    loadingCreateUpdate: false,
    categoryById: null,
    subCategoryById: null,
    isUpdatingCategory: false,
    isUpdatingSubCategory: false,
}

const categoryReducer = (
    state = INITIAL_STATE,
    action: { type: any; payload: any }
) => {
    const { type, payload } = action;
    switch (type) {
        case CategoryTypes.LIST_ALL_CATEGORY_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CategoryTypes.LIST_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                categoriesAndSubCategories: payload,
                loading: false,
            };
        case CategoryTypes.LIST_ALL_CATEGORY_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false,
            };

        case CategoryTypes.LIST_CATEGORY_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CategoryTypes.LIST_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: payload,
                loading: false,
            };
        case CategoryTypes.LIST_CATEGORY_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false,
            };

        case CategoryTypes.CREATE_CATEGORY_START:
            return {
                ...state,
                loadingCreateUpdate: true,
            };
        case CategoryTypes.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, payload],
                loadingCreateUpdate: false,
            };
        case CategoryTypes.CREATE_CATEGORY_FAILURE:
            return {
                ...state,
                error: payload,
                loadingCreateUpdate: false,
            };

        case CategoryTypes.DELETE_CATEGORY_START:
            return {
                ...state,
                loading: true,
            };

        case CategoryTypes.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.filter(
                    (category) => category._id !== payload
                ),
                loading: false,
            };
        default:
            return state;
    }
}

export default categoryReducer;