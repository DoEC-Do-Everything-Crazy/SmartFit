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
import {
  ChangeScreenReducer,
  AppSettingReducer,
  UserReducer,
  PasswordReducer,
  ThemeReducer,
  TurnSwitchReducer,
  IdReducer,
} from '../reducers/';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  whitelist: ['screen', 'password', 'setting', 'user', 'turn', 'id'],
  //whitelist
  //blacklist
};
const persistedReducer = persistCombineReducers(persistConfig, {
  screen: ChangeScreenReducer,
  setting: AppSettingReducer,
  user: UserReducer,
  password: PasswordReducer,
  theme: ThemeReducer,
  turn: TurnSwitchReducer,
  id: IdReducer,
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
