// @flow
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

/** Redux Store configuration function */
export default function configureStore(preloadedState?: Object) {
  /* Sagas */
  const sagaMiddleware = createSagaMiddleware();
  sagaMiddleware.run(rootSaga);

  /* Middlewares */
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  /* Composing enhancers */
  const enhancers = [middlewareEnhancer];
  const composer =
    process.env.NODE_ENV === "development" ? composeWithDevTools : compose;
  const composedEnhancers = composer(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
