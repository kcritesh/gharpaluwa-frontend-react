import * as ProductTypes from './products.types';

export const fetchUserProducts = () => ({
    type: ProductTypes.GET_PRODUCTS_OF_USER_START
})

export const fetchUserProductsSuccess = (products: any[]) => ({
    type: ProductTypes.GET_PRODUCTS_OF_USER_SUCCESS,
    payload: products
})

export const fetchUserProductsError = (error: any) => ({
    type: ProductTypes.GET_PRODUCTS_OF_USER_FAILURE,
    payload: error
})

export const fetchProductById = (productId: string) => ({
    type: ProductTypes.GET_PRODUCT_BY_ID_START,
    payload: productId
})

export const fetchProductByIdSuccess = (product: any) => ({
    type: ProductTypes.GET_PRODUCT_BY_ID_SUCCESS,
    payload: product
})

export const fetchProductByIdError = (error: any) => ({
    type: ProductTypes.GET_PRODUCT_BY_ID_FAILURE,
    payload: error
})

export const createProductStart = ( formData : any, cb : ()=> void)=>({
    type: ProductTypes.CREATE_PRODUCT_START,
    payload : {formData, cb}
})

export const createProductSuccess = () => ({
    type: ProductTypes.CREATE_PRODUCT_SUCCESS,
})

export const createProductFailure = (error: any)=>({
    type: ProductTypes.CREATE_PRODUCT_FAILURE,
    payload : error
})

export const updateProductStart = ( id : string, formData : any, cb : ()=> void)=>({
    type: ProductTypes.UPDATE_PRODUCT_START,
    payload : {id, formData, cb}
})

export const updateProductSuccess = () => ({
    type: ProductTypes.UPDATE_PRODUCT_SUCCESS,
})

export const updateProductFailure = (error: any)=>({
    type: ProductTypes.UPDATE_PRODUCT_FAILURE,
    payload : error
})

export const deleteProduct  = (productId: string) => ({
    type: ProductTypes.DELETE_PRODUCT_START,
    payload: productId
})

export const deleteProductSuccess = (id: any) => ({
    type: ProductTypes.DELETE_PRODUCT_SUCCESS,
    payload: id,
})

export const deleteProductError = (error: any) => ({
    type: ProductTypes.DELETE_PRODUCT_FAILURE,
    payload: error
})