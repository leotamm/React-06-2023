import React, { useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const { setLoggedIn } = useContext(AuthContext)
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPVWnc4f_t0M5kHJckxaOR4cFYgqJwx4Y";
  const { t } = useTranslation();

  const login = () => {

    if (!(emailRef.current && passwordRef.current)) {
      return;
    }
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true
    }
    const headers = { "Content-Type": "application/json" }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: headers
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error === undefined) {
          sessionStorage.setItem("id_token", data.idToken);
          sessionStorage.setItem("refresh_token", data.refreshToken);
          setLoggedIn(true);
          navigate('/admin');
        } else {
          setMessage(data.error.message);
        }
      })
  }

  const gotoSignUp = () => {
    navigate('/signup');
  }

  return (
    <div>
      <div className='bold-heading'>{t('login')}</div><br />
      <div className='nope'>{t(message)}</div>
      <label>{t('email')}</label><br />
      <input ref={emailRef} type="text" /><br />
      <label>{t('password')}</label><br />
      <input ref={passwordRef} type="text" /><br /><br />
      <button onClick={login}>{t('login')}</button><br /><br />
      <label className='new-user' onClick={gotoSignUp}>Register new user</label><br />
    </div>
  )
}

export default Login