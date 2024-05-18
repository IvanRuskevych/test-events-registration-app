import { createSlice } from '@reduxjs/toolkit';
import { getAllEventsThunk } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { err }) => {
  state.isLoading = false;
  state.error = err.message;
};
const handleFulfilledEvents = (state, { payload }) => {
  state.isLoading = false;
  state.events = payload;
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    isLoading: false,
    error: false,
    eventId: null,
    eventTitle: '',
    events: [],
  },

  reducers: {
    setEventId(state, { payload }) {
      state.eventId = payload;
    },
    setEventTitle(state, { payload }) {
      state.eventTitle = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(getAllEventsThunk.pending, handlePending);
    builder.addCase(getAllEventsThunk.rejected, handleRejected);
    builder.addCase(getAllEventsThunk.fulfilled, handleFulfilledEvents);
  },
});

export const eventsReducer = eventsSlice.reducer;
export const { setEventId, setEventTitle } = eventsSlice.actions;