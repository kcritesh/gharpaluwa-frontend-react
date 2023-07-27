// Main Store Interface
export interface IAuthState {
  isAuthenticated: boolean | null;
  currentUser: object | any;
  error: any | null;
  loading: boolean;
  authLoading?: boolean;
}
