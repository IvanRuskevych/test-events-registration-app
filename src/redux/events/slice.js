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
  console.log('payload', payload);
  const { total, events, page } = payload;
  state.isLoading = false;
  state.events = [...state.events, ...events];
  state.total = total;
  state.page = page + 1;
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    isLoading: false,
    error: false,
    eventId: null,
    eventTitle: '',
    events: [],
    total: 0,
    page: 1,
  },

  reducers: {
    setEventId(state, { payload }) {
      state.eventId = payload;
    },
    setEventTitle(state, { payload }) {
      state.eventTitle = payload;
    },
    resetPage(state, { payload }) {
      console.log('setPage payload', payload);
      state.page = payload;
    },
    resetEvents(state, { payload }) {
      state.events = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(getAllEventsThunk.pending, handlePending);
    builder.addCase(getAllEventsThunk.rejected, handleRejected);
    builder.addCase(getAllEventsThunk.fulfilled, handleFulfilledEvents);
  },
});

export const eventsReducer = eventsSlice.reducer;
export const { setEventId, setEventTitle, resetPage, resetEvents } = eventsSlice.actions;
