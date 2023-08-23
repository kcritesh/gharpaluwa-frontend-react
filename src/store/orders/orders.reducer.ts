import { IOrderState } from "../interfaces";
import * as OrderTypes from "./orders.types";

const INITIAL_STATE: IOrderState = {
    vendorOrders: [],
    customerOrders : [],
    error: null,
    loading: false,
    loadingCreateUpdate: false,
}

const ordersReducer = (state = INITIAL_STATE,  action: { type: any; payload: any; }) => {
const { type, payload } = action;
switch (type) {
    case OrderTypes.GET_ORDERS_OF_VENDOR_START:
        return {
            ...state,
            loading: true
        }
    case OrderTypes.GET_ORDERS_OF_VENDOR_SUCCESS:
        return{
            ...state,
            vendorOrders: payload,
            loading: false
        }
    case OrderTypes.GET_ORDERS_OF_VENDOR_FAILURE:
        return{
            ...state,
            error: payload,
            loading: false
        }

    default:
        return state;
}
}

export default ordersReducer;