import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistCombineReducers,
} from 'redux-persist';

// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../saga';
import {ChangeScreenReducer, UserReducer} from '../reducers/';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  // whitelist: ['screen'],
  //whitelist
  //blacklist
};
const persistedReducer = persistCombineReducers(persistConfig, {
  screen: ChangeScreenReducer,
  user: UserReducer,
  // other reducers here
});

// let sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // sagaMiddleware,
];

const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware,
});

// sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
