import React, { useState, useRef } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { tribeEvents, tribeResources } from '../data/calendarData.jsx'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'

import getDay from 'date-fns/getDay'
// import enUS from 'date-fns/locale/en-US'
import et from 'date-fns/locale/et'
import "react-big-calendar/lib/css/react-big-calendar.css"
import '../css/calendar.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Dropdown } from 'react-bootstrap'



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
        return <div style={{ background: 'red', height: '100%', padding: '5px' }}>{props.title}</div>
      case 'Welcome to contact':
        return <div style={{ background: 'green', height: '100%', padding: '5px' }}>{props.title}</div>
      default:
        return <div style={{ background: 'yellow', height: '100%', padding: '5px' }}>{props.title}</div>
    }
  }
}

function TribeCalendar() {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const eventUserRef = useRef(null);
  const eventAccessRef = useRef(false);
  const eventTitleRef = useRef(null);
  const eventStartRef = useRef(null);
  const eventEndRef = useRef(null);
  const eventCommentRef = useRef(null);

  return (
    <div>
      <h4>/ Tribe Calendar page /</h4>
      <Button variant="primary" onClick={() => handleShowModal()}>
        Add event
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                // placeholder="name@example.com"
                ref={eventTitleRef}
                autoFocus
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Check
                type='checkbox'
                label='Private Event (Details for your eyes only)'
                ref={eventAccessRef}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Start</Form.Label>
              <Form.Control
                type='text'
                ref={eventStartRef}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>End</Form.Label>
              <Form.Control
                type='text'
                ref={eventEndRef}
              />
            </Form.Group>
            <Form.Group className='mb-3'
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                ref={eventCommentRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
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