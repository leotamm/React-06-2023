import React, { useEffect, useState } from 'react'

function Article() {

  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
      .then(res => res.json())
      .then(data => setArticle(data || []))
  }, []);

  return (
    <div className='page'>
      <h1>{article.title}</h1>
      <p>{article.intro}</p>
      <img className='doggy-pic' src='https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg' alt='doggie'/>
      <p>{article.body}</p>
      <button className='custom-button'>amet</button>
    </div>
  )
}

export default Article