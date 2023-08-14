import { connect } from "react-redux";
import { fetchUserProducts } from "src/store/products/products.action";

const mapStateToProps = (state: { products: any; }) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => any) => ({
  fetchUserProducts: () => dispatch(fetchUserProducts()),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
