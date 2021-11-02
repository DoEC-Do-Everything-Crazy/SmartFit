// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../saga';
import {
  AppSettingReducer,
  CartReducer,
  ChangeScreenReducer,
  IdReducer,
  ImageRateReducer,
  PasswordReducer,
  ProductTypeReducer,
  ThemeReducer,
  TurnSwitchReducer,
  UserReducer,
} from '../reducers/';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistCombineReducers,
  persistStore,
} from 'redux-persist';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import EncryptedStorage from 'react-native-encrypted-storage';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  whitelist: [
    'screen',
    'password',
    'setting',
    'user',
    'turn',
    'id',
    'image',
    'cart',
  ],
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
  productType: ProductTypeReducer,
  image: ImageRateReducer,
  cart: CartReducer,
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
