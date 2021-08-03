import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { AuthState } from './ducks/auth';
import { BetState } from './ducks/bet';
import { CartState } from './ducks/cart';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export interface ApplicationStore {
  Auth: AuthState;
  Bet: BetState;
  Cart: CartState;
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

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
