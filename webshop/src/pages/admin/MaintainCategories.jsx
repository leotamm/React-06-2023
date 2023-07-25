import React from 'react';
import { useTranslation } from 'react-i18next';

function MaintainCategories() {

  const { t } = useTranslation();

  return (
    <div>
      <div className='bold-heading'>{t('maintain-categories')}</div><br />
    </div>
  )
}

export default MaintainCategories