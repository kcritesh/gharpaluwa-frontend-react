import { connect } from "react-redux";
import { getOrdersVendors } from "src/store/orders/orders.action";

const mapStateToProps = (state) => ({
  orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({
  onGetOrdersVendors: () => dispatch(getOrdersVendors()),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
