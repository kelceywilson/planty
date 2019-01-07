import { createStore, applyMiddleware, compose } from "redux";
// import ReduxPromise from "redux-promise";
// import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

// const middleware = [ReduxPromise, thunk];
const middleware = [];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);

export default store;
