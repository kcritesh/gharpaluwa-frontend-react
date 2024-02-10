// Main Store Interface
export interface IAuthState {
  isAuthenticated: boolean | null;
  currentUser: object | any;
  error: any | null;
  loading: boolean;
  authLoading?: boolean;
  resetPasswordLoading?: boolean;
  resetPasswordRequestLoading?: boolean;
  resetPasswordRequestSuccess?: boolean;
  resetPasswordSuccess?: boolean;
  verificationOtpLoading?: boolean;
  verificationOtpSuccess?: boolean;
}

export interface IProductState {
  userProducts: any[];
  error: any | null;
  loading: boolean;
  loadingCreateUpdate: boolean;
  productById: any | null;
}

export interface IOrderState {
  vendorOrders: any[];
  customerOrders: any[];
  error: any | null;
  loading: boolean;
  loadingCreateUpdate: boolean;
}

export interface ICategoryState {
  categoriesAndSubCategories: any[];
  categories: any[];
  subCategories: any[];
  subCategoriesByCategory: any[];
  categoriesCount: number;
  subCategoriesCount: number;
  error: any | null;
  loading: boolean;
  loadingCreateUpdate: boolean;
  categoryById: any | null;
  subCategoryById: any | null;
  isUpdatingCategory: boolean;
  isUpdatingSubCategory: boolean;
}