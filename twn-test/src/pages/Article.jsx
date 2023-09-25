import React, { useEffect, useState } from 'react'
import savedText from '../assets/article_text.json'

function Article() {

  const [article, setArticle] = useState([]);

  useEffect(() => {

    fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
      .then(res => res.json())
      .then(data => setArticle(data || []))
  }, []);

  if (article.length === 0) {
    setArticle(savedText);
  }

  return (
    <div className='page'>
      <h1>{article.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: article.intro }} />
      <img className='doggy-pic' src='https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg' alt='doggie' />
      <p dangerouslySetInnerHTML={{ __html: article.body }} />
      <button className='custom-button'>amet</button>
    </div>
  )
}

export default Article