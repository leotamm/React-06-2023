import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import {tribeEvents, tribeResources } from '../data/calendarData.jsx'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import et from 'date-fns/locale/et'
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  'et-ET': et,
  'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function TribeCalendar() {
  return (
    <div>
      <h2>Tribe calendar</h2>
      
      <Calendar
        localizer={localizer}
        events={tribeEvents}
        esources={tribeResources}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}

export default TribeCalendar