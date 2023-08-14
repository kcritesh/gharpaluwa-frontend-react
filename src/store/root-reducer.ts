// Redux import
import { combineReducers } from "redux";

// Project imports
import authReducer from "./auth/auth.reducer";
import alertReducer from "./alert/alert.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alert : alertReducer,
  products : productsReducer
});

export default rootReducer;