import * as OrderTypes from './orders.types';

export const getOrdersVendors = () => ({
    type: OrderTypes.GET_ORDERS_OF_VENDOR_START
})

export const getOrdersVendorsSuccess = (orders: any) => ({
    type: OrderTypes.GET_ORDERS_OF_VENDOR_SUCCESS,
    payload: orders
})

export const getOrdersVendorsFailure = (error: any) => ({
    type: OrderTypes.GET_ORDERS_OF_VENDOR_FAILURE,
    payload: error
})