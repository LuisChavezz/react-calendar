import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { localizer, getMessagesES } from '../../helpers'

// components
import { Navbar, CalendarEvent, CalendarModal } from "../"
import { useState } from 'react'

const events = [
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
      backgroundColor: '#347CF7',
      borderRadius: '20px',
      opacity: 0.8,
      color: '#fff'
    }
    return {
      style
    }
  }

  const [lastView, setLastView] = useState(localStorage.getItem("lastView") || 'month')

  const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event })
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
