import React from "react";
import { ICategoryState } from "src/store/interfaces";
import container from "./Categories.Container";

const CategoriesComponent = ({
  category,
  onGetCategories,
  onGetSubCategories,
  onDeleteCategory,
  onUpdateCategory,
  onCreateSubcategory,
  onDeleteSubcategory,
  onUpdateSubcategory,
}: Props) => {
  return <div>CategoriesComponent</div>;
};

export default container(CategoriesComponent);
interface Props {
  category: ICategoryState;
  onGetCategories: () => void;
  onGetSubCategories: (parentId: string) => void;
  onDeleteCategory: (id: string, cb: () => void) => void;
  onUpdateCategory: (id: string, data: any, cb: () => void) => void;
  onCreateSubcategory: (data: any, cb: () => void) => void;
  onDeleteSubcategory: (id: string, cb: () => void) => void;
  onUpdateSubcategory: (id: string, data: any, cb: () => void) => void;
}
