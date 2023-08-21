import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import config from '../../data/config.json';
import '../../css/Categories.css';

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
      
      <div>
        {categories.map((category, index) =>
          <div key={index} className='categories'>
            <div className='name'>{category.name}</div>
            <Button classname='button' variant="light" onClick={() => deleteCategory(index)}>Delete</Button>
            {/* <img className='button' src="delete.png" onClick={() => deleteCategory(index)} alt="Delete button" /> */}
          </div>)}
      </div>

      <div className='add-categories'>
        <label>{t('category-name')}</label><br />
        <input onKeyUp={addCategory} ref={categoryRef} type="text" /><br />

        {/* <input ref={categoryRef} type="text" /><br /> */}
        <Button variant="light" onClick={addCategory}>{t('add')}</Button><br /><br />
      </div>
      
    </div>
  )
}

export default MaintainCategories