import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './events/slice.js';
import { participantsReducer } from './participants/slice.js';

export default configureStore({
  reducer: {
    events: eventsReducer,
    participants: participantsReducer,
  },
});
