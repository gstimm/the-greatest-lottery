import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AuthState } from './ducks/auth';
import { BetState } from './ducks/bet';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export interface ApplicationStore {
  Auth: AuthState;
  Bet: BetState;
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store: Store<ApplicationStore> = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
