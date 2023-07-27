// Redux imports
import { createStore, applyMiddleware } from "redux";

// Redux Devtools import
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// Redux Saga import
import createSagaMiddleware from "redux-saga";

// Project imports
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Create Store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export function getCurrentState() {
  return store.getState();
}

// export function getAppConfig() {
//   var currentState: any = getCurrentState();
//   return currentState.siteCoordinator.config;
// }

export default store;