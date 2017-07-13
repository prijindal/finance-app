/* @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage';
import reducer from './reducers';

/*
In this function we are defining what all data needs to be managed by the app
*/
export default function configureStore(onCompletion):any {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(logger);
  const store = createStore(
    reducer,
    undefined,
    composeEnhancers( middleware, autoRehydrate() )
  );
  persistStore(store, { storage: localForage }, onCompletion);
  return store;
}
