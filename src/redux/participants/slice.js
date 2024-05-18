import { createSlice } from '@reduxjs/toolkit';
import { getAllParticipantsThunk } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { err }) => {
  state.isLoading = false;
  state.error = err.message;
};

const handleFulfilledParticipants = (state, { payload }) => {
  state.isLoading = false;
  state.participants = payload;
};
const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    isLoading: false,
    error: false,
    participants: [],
  },
  extraReducers: builder => {
    builder.addCase(getAllParticipantsThunk.pending, handlePending);
    builder.addCase(getAllParticipantsThunk.rejected, handleRejected);
    builder.addCase(getAllParticipantsThunk.fulfilled, handleFulfilledParticipants);
  },
});

export const participantsReducer = participantsSlice.reducer;
