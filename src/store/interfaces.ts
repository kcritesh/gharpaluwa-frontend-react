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
