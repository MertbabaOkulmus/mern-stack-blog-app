import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; //asenkron işlemleri yapmak için gerekli 
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk), composeWithDevTools())
);

export default store;