import React from 'react'
import { useTranslation } from 'react-i18next'

function Shops() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className='bold-heading'>{t('shop')}</div><br />
    </div>
  )
}

export default Shops