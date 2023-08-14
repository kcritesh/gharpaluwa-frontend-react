import * as ProductTypes from './products.types';

export const fetchUserProducts = () => ({
    type: ProductTypes.GET_PRODUCTS_OF_USER_START
})

export const fetchUserProductsSuccess = (products: any[]) => ({
    type: ProductTypes.GET_PRODUCTS_OF_USER_SUCCESS,
    payload: products
})

export const fetchUserProductsError = (error: any) => ({
    type: ProductTypes.GET_PRODUCTS_OF_USER_ERROR,
    payload: error
})