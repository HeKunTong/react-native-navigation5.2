import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createFlipperMiddleware from 'rn-redux-middleware-flipper';

let middlewares = [thunk];

if (__DEV__) { // eslint-disable-line
  middlewares = [...middlewares, createFlipperMiddleware()];
}

const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);
