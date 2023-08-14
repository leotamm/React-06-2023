import React, { useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const { t } = useTranslation();
  const { setLoggedIn } = useContext(AuthContext)
  const emailRef= useRef();
  const passwordRef= useRef();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const login = () => {
    console.log(passwordRef.current.value);
    if (Number(passwordRef.current.value) === 123) {
      setLoggedIn(true);
      navigate('/admin');
    } else {

    setMessage('Vale parool!');
    }
  }

  return (
    <div>
      <div className='bold-heading'>{t('login')}</div><br />

      <div>{message}</div>
      <label>E-mail</label><br />
      <input ref={emailRef} type="text" /><br />
      <label>Parool</label><br />
      <input ref={passwordRef} type="text" /><br />
      <button onClick={login}>Logi sisse</button>

    </div>
  )
}

export default Login