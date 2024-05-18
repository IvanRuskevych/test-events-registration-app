import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/slice.js";

export default configureStore({
  reducer: {
    events: eventsReducer,
  },
});
