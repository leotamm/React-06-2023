import React from 'react'
import { useTranslation } from 'react-i18next'

function ContuctUs() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className='bold-heading'>{t('contact')}</div><br />
      </div>
  )
}

export default ContuctUs