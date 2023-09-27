import React, { useEffect, useState } from 'react'
import savedText from '../assets/article_text.json'
import DOMPurify from 'dompurify';


function Article() {

  const [article, setArticle] = useState({ title: '', body: '', intro: '' });

  useEffect(() => {

    fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
      .then(res => res.json())
      .then((data) =>
        setArticle({
          title: DOMPurify.sanitize(data.title) || '',
          body: DOMPurify.sanitize(data.body) || '',
          intro: DOMPurify.sanitize(data.intro) || '',
        }))
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