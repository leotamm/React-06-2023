import React, { useState, useRef, useEffect } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { tribeEvents, tribeResources } from '../data/calendarData.jsx'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../css/calendar.css'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Watch } from 'react-loader-spinner'
import config from '../data/config.json'

const locales = {
  'et-ET': require('date-fns/locale/et'),
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
    const request = props.event.user;
    switch (request) {
      case 'User 1':
        return <div style={{ background: 'red', height: '100%', padding: '5px' }}>{props.title}</div>
      case 'User 2':
        return <div style={{ background: 'green', height: '100%', padding: '5px' }}>{props.title}</div>
      case 'User 3':
        return <div style={{ background: 'violet', height: '100%', padding: '5px' }}>{props.title}</div>
      case 'User 4':
        return <div style={{ background: 'blue', height: '100%', padding: '5px' }}>{props.title}</div>
      case 'User 5':
        return <div style={{ background: 'yellow', height: '100%', padding: '5px' }}>{props.title}</div>
      default:
        return <div style={{ background: 'gray', height: '100%', padding: '5px' }}>{props.title}</div>
    }
  }
}


function TribeCalendar() {

  // const [allEvents, setAllEvents] = useState(tribeEvents);
  const [allEvents, setAllEvents] = useState(tribeEvents);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, []);


  // useEffect(() => {
  //   fetch(config.CALENDAR_DATA_URL)
  //   .then(res => res.json())
  //   .then(data => setAllEvents(data || []))
  //   .catch((error) => {
  //     console.error(error)
  //   }); setLoading(false);
  // }, []);

  const [newEvent, setNewEvent] = useState({
    id: "",
    user: "",
    isPrivate: false,
    start: "",
    end: "",
    comment: "",
    resourceId: "",
    data: {
      restrictions: 'Welcome to contact'
    }
  });


  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }
  const handleShowModal = () => {
    setNewEvent({
      id: "",
      user: "",
      title: "",
      isPrivate: false,
      start: "",
      end: "",
      comment: ""
    });
    setShowModal(true);
  }

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    fetch(config.CALENDAR_DATA_URL, {
      method: "PUT",
      body: JSON.stringify(allEvents)
    })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleSaveEvent = () => {
    // check if all data is valid, then proceed
    handleAddEvent();
    setShowModal(false);

  }

  return (
    <div>
      <p>This page is for sharing schedules</p>
      <Button variant="primary" onClick={() => handleShowModal()}>
        Add event
      </Button><br />

      <Watch
        height="50"
        width="50"
        radius="48"
        color="#844FFF"
        ariaLabel="watch-loading"
        wrapperStyle={{ margin: 'auto', width: 50 }}
        wrapperClassName=""
        visible={isLoading}
      />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                placeholder="User 1-5"
                value={newEvent.resourceId}
                onChange={(e) => setNewEvent({ ...newEvent, resourceId: e.target.value })}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check
                type='checkbox'
                label='Private Event (Details for your eyes only)'
                onChange={(e) => setNewEvent({ ...newEvent, isPrivate: e.target.value })}
              />
            </Form.Group>
            <label>Start Time</label>
            <Form.Group className='mb-3'>
              <DateTimePicker
                calendarAriaLabel="Toggle calendar"
                onChange={(start) => setNewEvent({ ...newEvent, start })}
                onInvalidChange={() => alert('Invalid datetime')}
                // showLeadingZeros='true'
                required
                value={newEvent.start}
              />
            </Form.Group>
            <label>End Time</label>
            <Form.Group className='mb-3'>
              <DateTimePicker
                calendarAriaLabel="Toggle calendar"
                onChange={(end) => setNewEvent({ ...newEvent, end })}
                onInvalidChange={() => alert('Invalid datetime')}
                // showLeadingZeros='true'
                required
                value={newEvent.end}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder="Comments"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleSaveEvent()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Calendar
        localizer={localizer}
        events={allEvents}
        // resources={tribeResources}
        toolbar={true} // set false for customizing toolbar component
        step={config.CALENDAR_INTERVAL_MIN}
        min={new Date(0, 0, 0, config.CALENDAR_START_HOUR, 0, 0)}
        max={new Date(0, 0, 0, config.CALENDAR_END_HOUR, 0, 0)}
        defaultView="day"
        views={['day', 'week', 'month']}
        startAccessor="start"
        endAccessor="end"
        components={components}
        style={{ height: 600 }}
      />
    </div>
  )
}

export default TribeCalendar