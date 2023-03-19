import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api"
import { convertEventsToDateEvents } from "../helpers"
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } from "../store"


export const useCalendarStore = () => {

  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector( state => state.calendar )
  const { user } = useSelector( state => state.auth )

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async ( calendarEvent ) => {
  // TODO: update event:
  if ( calendarEvent._id ) {
    // actualizando...
    dispatch( onUpdateEvent({ ...calendarEvent }))
    
  } else {
    // Creando...
    const { data } = await calendarApi.post('/events', calendarEvent)
    dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user }) )
  }
  }

  const startDeleteEvent = async () => {
    dispatch( onDeleteEvent() )
  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events')
      const events = convertEventsToDateEvents( data.events )

    } catch (error) {
      console.log('Error cargando eventos');
    }
  }
  
  return {
    //* Propiedades
    events,
    activeEvent,

    //* Métodos
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
    startLoadingEvents,
  }
}
