import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import config from '../../data/config.json'

function MaintainCategories() {

  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []))
  }, []);

  const addCategory = (event) => {
    console.log(event);
    if ((event.code !== "Enter" && event.type !== "click")) {
      return;
    }
    categories.push({ "name": categoryRef.current.value });
    setCategories(categories.slice());
    fetch(config.categoryUrl, {
      method: "PUT",
      body: JSON.stringify(categories),
    })
    categoryRef.current.value = '';
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(config.categoryUrl, {
      method: "PUT",
      body: JSON.stringify(categories),
    })
  }

  return (
    <div>
      <div className='bold-heading'>{t('maintain-categories')}</div><br />
      <label>Kategooria nimi</label><br />
      <input onKeyUp={addCategory} ref={categoryRef} type="text" /><br />
      {/* <input ref={categoryRef} type="text" /><br /> */}
      <button onClick={addCategory}>Lisa</button>br
      <div>
        {categories.map((category, index) =>
          <div key={index}>
            {category.name}
            <button onClick={() => deleteCategory(index)}>X</button>
          </div>)}
      </div>
    </div>
  )
}

export default MaintainCategories