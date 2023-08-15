import {IProductState} from '../interfaces'; // import the interface
import * as ProductTypes from './products.types'; // import the product types

const INITIAL_STATE: IProductState = {
    userProducts: [],
    error: null,
    loading: false
}

const productsReducer = (state = INITIAL_STATE,  action: { type: any; payload: any; }) => {
const { type, payload } = action;
switch (type) {
    case ProductTypes.GET_PRODUCTS_OF_USER_START:
        return {
            ...state,
            loading: true
        }
    case ProductTypes.GET_PRODUCTS_OF_USER_SUCCESS:
        return{
            ...state,
            userProducts: payload,
            loading: false
        }
    case ProductTypes.GET_PRODUCTS_OF_USER_FAILURE:
        return{
            ...state,
            error: payload,
            loading: false
        }
    case ProductTypes.DELETE_PRODUCT_START:
        return{
            ...state,
            loading: true
        }
    case ProductTypes.DELETE_PRODUCT_SUCCESS:
        return{
            ...state,
            loading: false
        }
    case ProductTypes.DELETE_PRODUCT_FAILURE:
        return{
            ...state,
            error: payload,
        }

    default:
        return state;
}

}

export default productsReducer;