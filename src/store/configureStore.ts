import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { apiMiddleware } from "react-redux-api-middleware";

export default function configureStore() {
  let middleware = [thunk, apiMiddleware()];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
      collapsed: true,
    });
    middleware = [...middleware, logger];
  }

  return createStore(rootReducer, applyMiddleware(...middleware));
}
