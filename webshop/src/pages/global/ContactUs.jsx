import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from 'react-bootstrap';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bojc0c9', 'template_enmbzg5', form.current, 'MYQp_2Bvax6lzJMsU')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label><br />
    //   <input type="text" name="user_name" /><br />
    //   <label>Email</label><br />
    //   <input type="email" name="user_email" /><br />
    //   <label>Message</label><br />
    //   <textarea name="message" /><br />
    //   <input type="submit" value="Send" /><br />
    // </form>

    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" id='user_name' />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id='user_email' />
        <Form.Label>Message</Form.Label>
        <Form.Control type="textarea" rows={3} id='message' />
        <input type="submit" value="Send" />
      </Form.Group>
    </Form>

  );
};