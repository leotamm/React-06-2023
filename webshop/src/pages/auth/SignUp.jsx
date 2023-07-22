import React from 'react'

import { useTranslation } from 'react-i18next';

function SignUp() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className='bold-heading'>{t('Sign Up')}</div><br />
    </div>
  )
}

export default SignUp