import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form } from 'react-bootstrap';
import { Button as MButton } from '@mui/material';

import { useTranslation } from 'react-i18next';

export const ContactUs = () => {

  const form = useRef<HTMLFormElement>(null);

  const { t } = useTranslation();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_bojc0c9', 'template_enmbzg5', form.current, 'MYQp_2Bvax6lzJMsU')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
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


    // tavaline form võib töötada paremini kui bootstrap
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3">
        <Form.Label>{t('name')}</Form.Label>
        <Form.Control type="text" id='user_name' />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id='user_email' />
        <Form.Label>{t('message')}</Form.Label>
        <Form.Control type="textarea" id='message' />
        <MButton variant="contained" type="submit" >{t('send')}</MButton>
        {/* <input type="submit"   value={t('send')} /> */}
      </Form.Group>
    </Form>
  );
};