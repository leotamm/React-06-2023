import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { tribeEvents, tribeResources } from '../data/calendarData.jsx'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'

import getDay from 'date-fns/getDay'
// import enUS from 'date-fns/locale/en-US'
import et from 'date-fns/locale/et'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../css/calendar.css'

const locales = {
  'et-ET': et,
  // 'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
})

const components = {
  event: (props) => {
    const request = props.event.data.restrictions;
    switch (request) {
      case 'Do not disturb':
        return <div style={{ background: 'red', height:'100%', padding:'5px' }}>{props.title}</div>
      case 'Welcome to contact':
        return <div style={{ background: 'green', height:'100%', padding:'5px' }}>{props.title}</div>
      default:
        return <div style={{ background: 'yellow', height:'100%', padding:'5px' }}>{props.title}</div>
    }
  }
}

function TribeCalendar() {
  return (
    <div>
      <h2>Tribe calendar</h2>

      <Calendar
        localizer={localizer}
        events={tribeEvents}
        resources={tribeResources}
        toolbar={true} // set false for customizes toolbar component
        step={45}
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 23, 0, 0)}
        defaultView="day"
        views={['day', 'week', 'month', 'work_week', 'agenda']}
        startAccessor="start"
        endAccessor="end"
        components={components}
        style={{ height: 550 }}
      />
    </div>
  )
}

export default TribeCalendar