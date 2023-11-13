import React, { useState, useRef, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import toast, { Toaster } from 'react-hot-toast'
import config from '../data/config.json'


function Ideas() {

  const [users, setUsers] = useState([])
  const [ideaStatus, setIdeaStatus] = useState('START')
  const ideaTypeRef = useRef(null)
  const [ideaType, setIdeaType] = useState(null)
  const [ideaUsers, setIdeaUsers] = useState([]);
  const ideaQuestionRef = useRef(null)
  const [ideaQuestion, setIdeaQuestion] = useState(null);

  const [idea, setIdea] = useState({
    type: "",
    users: [],
    question: "",
    isActive: true,
    replies: {
      user: "",
      reply: ""
    }
  });

  useEffect(() => {
    fetch(config.USER_DATA_URL)
      .then(res => res.json())
      .then(data => setUsers(data || []))
      .catch((error) => {
        console.error(error)
      })
  }, []);

  const registerIdea = () => {
    const selectedValue = ideaTypeRef.current.value;
    setIdeaStatus('SELECT_MEMBERS');
    setIdeaType(selectedValue);
  }

  const handleUserSelection = (user, isSelected) => {
    if (isSelected) {
      setIdeaUsers([...ideaUsers, user]);
    }
  }
  
  const registerQuestion = () => {
    const selectedQuestion = ideaQuestionRef.current.value;
    setIdeaStatus('CONFIRM');
    setIdeaQuestion(selectedQuestion);
    console.log('Registered type: ' + ideaType + ' for users ' + ideaUsers + ' and the question is: ' + selectedQuestion);
    toast.success('Idea is submitted!');
  }

  const restart = () => {
    setIdeaStatus('START');
  }

  return (
    <div>
      <p>This page is for suggesting and discussing group ideas</p><br />

      {ideaStatus === 'START' &&
        <div>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Post a New Idea!</Form.Label>
            <Form.Select id="disabledSelect" ref={ideaTypeRef}>
              <option>Create a Yes-No Poll</option>
              <option>Ask for an opinion</option>
              <option>Schedule an event</option>
            </Form.Select>
          </Form.Group>
          <Button onClick={() => registerIdea()}>START</Button><br />
        </div>}

      {ideaStatus === 'SELECT_MEMBERS' &&
        <div>
          <Form>
            {users.map((user, index) => (
              <div key={index} className="row align-items-center">
                <div className="col-6">
                  <Form.Label>{user.user}</Form.Label>
                </div>
                <div className="col-6">
                  <Form.Check
                    type="checkbox"
                    id={`user-checkbox-${index}`}
                    checked={ideaUsers.includes(user)}
                    onChange={(e) => handleUserSelection(user, e.target.checked)}
                  />
                </div>
              </div>
            ))}
          </Form>
          <Button onClick={() => setIdeaStatus('YOUR_IDEA')}>SELECT MEMBERS</Button><br />
        </div>}

      {ideaStatus === 'YOUR_IDEA' &&
        <div>
          <InputGroup>
            <Form.Control as="textarea" ref={ideaQuestionRef}/>
          </InputGroup>
          <Button onClick={() => registerQuestion()}>SUBMIT IDEA</Button>
        </div>}

      <div>
        <Toaster/>
      </div>

      <Button variant='danger' onClick={() => restart()}>RESTART</Button>

      <hr></hr>
      <p>Current ideas</p>

    </div>
  )
}

export default Ideas