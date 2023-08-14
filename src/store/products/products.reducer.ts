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
    case ProductTypes.GET_PRODUCTS_OF_USER_ERROR:
        return{
            ...state,
            error: payload,
            loading: false
        }

    default:
        return state;
}

}

export default productsReducer;