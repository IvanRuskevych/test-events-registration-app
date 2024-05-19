import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/instance.js';

export const getAllEventsThunk = createAsyncThunk(
  'events/fetchEvents',
  async ({ page = 1, limit = 10 }, thunkAPI) => {
    try {
      const { data } = await instance.get(`/events?page=${page}&limit=${limit}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
