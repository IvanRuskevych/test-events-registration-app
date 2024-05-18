import { combineReducers } from '@reduxjs/toolkit';
import { eventsReducer } from './events/slice.js';
import { participantsReducer } from './participants/slice.js';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  events: eventsReducer,
  participants: participantsReducer,
});

const persistConfig = {
  key: 'events',
  storage,
};

export const appReducer = persistReducer(persistConfig, rootReducer);
