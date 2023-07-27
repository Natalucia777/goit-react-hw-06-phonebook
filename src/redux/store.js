import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';


const persistConfig = { 
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }, });
  },
});
  
export const persistor = persistStore(store);