import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { authReducer } from './authSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
