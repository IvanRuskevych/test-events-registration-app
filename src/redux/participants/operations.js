import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/instance.js';

export const getAllParticipantsThunk = createAsyncThunk(
  'participants/fetchParticipants',
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.get('/participants');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
