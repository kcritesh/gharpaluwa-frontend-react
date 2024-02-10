import { connect } from "react-redux";
import {
  deleteCategoryStart,
  listCategoriesStart,
  listSubcategoriesStart,
  updateCategoryStart,
  createSubcategoryStart,
  deleteSubcategoryStart,
  updateSubcategoryStart,
} from "src/store/categories/categories.actions";

const mapStateToProps = (state) => ({
  category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCategories: () => {
    dispatch(listCategoriesStart());
  },
  onGetSubCategories: (parentId) => {
    dispatch(listSubcategoriesStart(parentId));
  },
  onDeleteCategory: (id, cb = () => {}) => {
    dispatch(deleteCategoryStart(id, cb));
  },
  onUpdateCategory: (id, data, cb = () => {}) => {
    dispatch(updateCategoryStart(id, data, cb));
  },
  onCreateSubcategory: (data, cb = () => {}) => {
    dispatch(createSubcategoryStart(data, cb));
  },
  onDeleteSubcategory: (id, cb = () => {}) => {
    dispatch(deleteSubcategoryStart(id, cb));
  },
  onUpdateSubcategory: (id, data, cb = () => {}) => {
    dispatch(updateSubcategoryStart(id, data, cb));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
