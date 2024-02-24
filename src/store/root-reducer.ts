// Redux import
import { combineReducers } from "redux";

// Project imports
import authReducer from "./auth/auth.reducer";
import alertReducer from "./alert/alert.reducer";
import productsReducer from "./products/products.reducer";
import ordersReducer from "./orders/orders.reducer";
import categoryReducer from "./categories/categories.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alert : alertReducer,
  products : productsReducer,
  orders : ordersReducer,
  category : categoryReducer
});

export default rootReducer;