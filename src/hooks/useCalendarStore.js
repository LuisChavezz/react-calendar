import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent } from "../store"


export const useCalendarStore = () => {

  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector( state => state.calendar )

   const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
   }

   const startSavingEvent = async ( calendarEvent ) => {
    // TODO: llegar al backend


    // TODO: si todo bien:
    if ( calendarEvent._id ) {
      // ? actualizando...
      dispatch( onUpdateEvent({ ...calendarEvent }))
      
    } else {
      // ? Creando...
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }
   }
  
  return {
    //* Propiedades
    events,
    activeEvent,

    //* Métodos
    setActiveEvent,
    startSavingEvent
  }
}
