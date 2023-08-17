import { connect } from "react-redux";
import { createProductStart } from "src/store/products/products.action";

const mapStateToProps = (state: { products: any }) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => ({
  onCreateProduct: (formData: any, cb: () => void) => dispatch(createProductStart(formData, cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
