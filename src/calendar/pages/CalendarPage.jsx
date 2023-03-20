import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useEffect, useState } from 'react'
import { localizer, getMessagesES } from '../../helpers'
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks'

// components
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../"


export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const [lastView] = useState( localStorage.getItem("lastView") || 'month' )

  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid )
    
    const style = {
      backgroundColor: (isMyEvent) ? '#347CF7' : '#465660',
      borderRadius: '20px',
      opacity: 0.8,
      color: '#fff'
    }
    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    openDateModal()
  }
  const onSelect = ( event ) => {
    setActiveEvent( event )
  }
  const onViewChanged = ( event ) => {
    localStorage.setItem("lastView", event)
  }

  useEffect(() => {
    startLoadingEvents()
  }, [])
  

  return (
    <>
      <Navbar />
      
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        startAccessor="start"
        endAccessor="end"
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        defaultView={ lastView }
        onView={ onViewChanged }
        style={{ height: 'calc( 100vh - 80px )' }}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
