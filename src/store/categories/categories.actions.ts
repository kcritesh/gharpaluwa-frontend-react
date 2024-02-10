import * as CategoryTypes from './categories.types';

// List all categories as well as subcategories
export const listAllCategoryStart = () => ({
  type: CategoryTypes.LIST_ALL_CATEGORY_START,
});

export const listAllCategorySuccess = (categories) => ({
  type: CategoryTypes.LIST_ALL_CATEGORY_SUCCESS,
  payload: categories,
});

export const listAllCategoryFail = (error) => ({
  type: CategoryTypes.LIST_ALL_CATEGORY_FAILURE,
  payload: error,
});

// List all categories
export const listCategoriesStart = () => ({
  type: CategoryTypes.LIST_CATEGORY_START,
})

export const listCategoriesSuccess = (categories) => ({
  type: CategoryTypes.LIST_CATEGORY_SUCCESS,
  payload: categories,
})

export const listCategoriesFail = (error) => ({
  type: CategoryTypes.LIST_CATEGORY_FAILURE,
  payload: error,
})

// Create category
export const createCategoryStart = (formData, cb) => ({
  type: CategoryTypes.CREATE_CATEGORY_START,
  payload: { formData, cb },
})

export const createCategorySuccess = (category) => ({
  type: CategoryTypes.CREATE_CATEGORY_SUCCESS,
  payload: category,
})

export const createCategoryFail = (error) => ({
  type: CategoryTypes.CREATE_CATEGORY_FAILURE,
  payload: error,
})

// Delete category
export const deleteCategoryStart = (id, cb) => ({
  type: CategoryTypes.DELETE_CATEGORY_START,
  payload: { id, cb },
})

export const deleteCategorySuccess = (id) => ({
  type: CategoryTypes.DELETE_CATEGORY_SUCCESS,
  payload: id,
})

export const deleteCategoryFail = (error) => ({
  type: CategoryTypes.DELETE_CATEGORY_FAILURE,
  payload: error,
})

// Update category
export const updateCategoryStart = (id, formData, cb) => ({
  type: CategoryTypes.UPDATE_CATEGORY_START,
  payload: { id, formData, cb },
})

export const updateCategorySuccess = (category) => ({
  type: CategoryTypes.UPDATE_CATEGORY_SUCCESS,
  payload: category,
})

export const updateCategoryFail = (error) => ({
  type: CategoryTypes.UPDATE_CATEGORY_FAILURE,
  payload: error,
})

// List subcategories
export const listSubcategoriesStart = (parentId) => ({
  type: CategoryTypes.LIST_SUBCATEGORY_START,
  payload: parentId,
})

export const listSubcategoriesSuccess = (subcategories) => ({
  type: CategoryTypes.LIST_SUBCATEGORY_SUCCESS,
  payload: subcategories,
})

export const listSubCategoriesFailure = (error) => ({
  type: CategoryTypes.LIST_SUBCATEGORY_FAILURE,
  payload: error,
})

// Create subcategory
export const createSubcategoryStart = (formData, cb) => ({
  type: CategoryTypes.CREATE_SUBCATEGORY_START,
  payload: { formData, cb },
})

export const createSubcategorySuccess = (subcategory) => ({
  type: CategoryTypes.CREATE_SUBCATEGORY_SUCCESS,
  payload: subcategory,
})

export const createSubcategoryFail = (error) => ({
  type: CategoryTypes.CREATE_SUBCATEGORY_FAILURE,
  payload: error,
})

// Delete subcategory

export const deleteSubcategoryStart = (id, cb) => ({
  type: CategoryTypes.DELETE_SUBCATEGORY_START,
  payload: { id, cb },
})

export const deleteSubcategorySuccess = (id) => ({
  type: CategoryTypes.DELETE_SUBCATEGORY_SUCCESS,
  payload: id,
})

export const deleteSubcategoryFail = (error) => ({
  type: CategoryTypes.DELETE_SUBCATEGORY_FAILURE,
  payload: error,
})

// Update subcategory
export const updateSubcategoryStart = (id, formData, cb) => ({
  type: CategoryTypes.UPDATE_SUBCATEGORY_START,
  payload: { id, formData, cb },
})

export const updateSubcategorySuccess = (subcategory) => ({
  type: CategoryTypes.UPDATE_SUBCATEGORY_SUCCESS,
  payload: subcategory,
})

export const updateSubcategoryFail = (error) => ({
  type: CategoryTypes.UPDATE_SUBCATEGORY_FAILURE,
  payload: error,
})

