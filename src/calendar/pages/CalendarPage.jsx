import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useEffect, useState } from 'react'
import { localizer, getMessagesES } from '../../helpers'
import { useUiStore, useCalendarStore } from '../../hooks'

// components
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../"


export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#d10610',
      borderRadius: '20px',
      opacity: 0.8,
      color: '#fff'
    }
    return {
      style
    }
  }

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const [lastView] = useState( localStorage.getItem("lastView") || 'month' )

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
