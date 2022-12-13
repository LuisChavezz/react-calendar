import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños de mi jefita',
  notes: 'Hay que ir a comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '182',
    name: 'Luigi'
  }
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [
      tempEvent
    ],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: ( state, { payload } ) => {
      state.activeEvent = payload
    },
    onAddNewEvent: ( state, { payload } ) => {
      state.events.push( payload );
      state.activeEvent = null
    },
  }
});

export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;