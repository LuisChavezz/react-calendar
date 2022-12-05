import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import { addHours } from 'date-fns'
import { localizer, getMessagesES } from '../../helpers'
import { useUiStore, useCalendarStore } from '../../hooks'

// components
import { Navbar, CalendarEvent, CalendarModal } from "../"



const eventos = [
  {
    title: 'Cumpleaños de mi pana',
    notes: 'Comprar cartón de chelas',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      id: '123',
      name: 'Alberto'
    }
  }
]

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
  const { events } = useCalendarStore();
  const [lastView, setLastView] = useState( localStorage.getItem("lastView") || 'month' )

  const onDoubleClick = ( event ) => {
    openDateModal()
  }
  const onSelect = ( event ) => {
    console.log({ select: event })
  }
  const onViewChanged = ( event ) => {
    localStorage.setItem("lastView", event)
  }

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
    </>
  )
}
