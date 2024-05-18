import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/instance.js";

export const getAllEventsThunk = createAsyncThunk(
  "events/fetchEvents",
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.get("/events");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
