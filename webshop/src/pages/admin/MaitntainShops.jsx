import React from 'react';
import { useTranslation } from 'react-i18next';

function MaitntainShops() {

  const { t } = useTranslation();

  return (
    <div>
      <div className='bold-heading'>{t('maintain-shops')}</div><br />
    </div>
  )
}

export default MaitntainShops