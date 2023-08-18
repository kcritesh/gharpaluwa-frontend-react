import { connect } from "react-redux";
import {
  createProductStart,
  updateProductStart,
} from "src/store/products/products.action";

const mapStateToProps = (state: { products: any }) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => ({
  onCreateProduct: (formData: any, cb: () => void) =>
    dispatch(createProductStart(formData, cb)),
  onUpdateProduct: (id: string, formData: any, cb: () => void) =>
    dispatch(updateProductStart(id, formData, cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
