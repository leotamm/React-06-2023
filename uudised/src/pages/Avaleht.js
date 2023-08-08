import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/css/Avaleht.css';

function Avaleht() {

  const [uudised, uuendaUudised] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => uuendaUudised(json))
  }, []);

  return (
    <div className='hele-tekst'>
      <h1>See on avaleht, nähtav localhost:3000 aadressil/</h1>
      <img className="avalehe-pilt" src="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2020/12/Online-Business-Ideas.jpg" alt="" />

      {uudised.map((uudis, index) =>
        <div key={index}>
          <div className='user-id-style'>{uudis.userId}</div>
          <div className='post-id-style'>{uudis.id}</div>
          <div className='post-title-style'>{uudis.title}</div>
          <div>{uudis.body}</div>
          <Link to={'/kasutaja-postitus/' + uudis.userId}>
            <button>Kõik kasutaja postitused</button>
          </Link>
          <Link to={'/vaata-postitus/' + uudis.id}>
            <button>Vaata postitust</button>
          </Link>
          <br /><br />
        </div>
      )}
    </div>
  )
}

export default Avaleht