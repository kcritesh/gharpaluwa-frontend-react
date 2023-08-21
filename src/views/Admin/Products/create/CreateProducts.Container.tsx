import { connect } from "react-redux";
import {
  createProductStart,
  updateProductStart,
  fetchProductById,
} from "src/store/products/products.action";

const mapStateToProps = (state: { products: any }) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => ({
  onCreateProduct: (formData: any, cb: () => void) =>
    dispatch(createProductStart(formData, cb)),
  onUpdateProduct: (id: string, formData: any, cb: () => void) =>
    dispatch(updateProductStart(id, formData, cb)),
  onFetchProductById: (id: string) => dispatch(fetchProductById(id)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
