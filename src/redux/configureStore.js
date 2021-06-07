import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise-middleware";
import rootReducer from "./rootReducer";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [thunk, reduxPromise, routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "development") {
  // middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export { history };
