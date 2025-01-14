import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { MMKV } from 'react-native-mmkv';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import baseApi from '../services/api';
import authReducer from './authSlice/index';

const rootReducer = combineReducers({
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

let storage ;

try {
  storage = new MMKV();
  const MMKV = MMKVStorage.Loader().initialize();
  MMKV.setStringAsync('key', 'value');
} catch (error) {
  console.error('Failed to initialize MMKV:', error);
}
export const reduxStorage = {
  setItem: (key, value) => {
    storage?.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    storage?.getString(key);
    return Promise.resolve(true);
  },
  removeItem: key => {
    storage?.delete(key);
    return Promise.resolve(true);
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whiteList: ['auth'],
  autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };

