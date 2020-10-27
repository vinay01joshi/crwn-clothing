import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root.reducer';
import createSagaMiddeleware from 'redux-saga';
import { fetchCollectionStart } from '../redux/shop/shop.sagas'

const sagaMiddleware = createSagaMiddeleware();

const middelewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middelewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middelewares));

sagaMiddleware.run(fetchCollectionStart)

export const persistor = persistStore(store);

export default { store, persistor };