import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [],
    activeEvent: null
  },
  reducers: {
    
  }
});

export const {  } = calendarSlice.actions;