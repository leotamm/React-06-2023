import React from 'react'

import { useTranslation } from 'react-i18next';

function Login() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className='bold-heading'>{t('login')}</div><br />
    </div>
  )
}

export default Login