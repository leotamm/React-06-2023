import React, { useEffect, useState } from 'react'

function List() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://midaiganes.irw.ee/api/list?limit=500')
      .then(res => res.json())
      .then(data => setList(data.list))
  }, []);

  const convertSexToEstonian = (sex) => {
    if (sex === 'f') {
      return 'Naine';
    }
    if (sex === 'm') {
      return 'Mees';
    }
  }

  const convertUnixTimestampToDate = (unixTimestamp) => {
    const newDate = new Date(unixTimestamp * 1000).toLocaleString();
    const index = String(newDate).indexOf(',');
    return String(newDate).slice(0, index);
  }

  return (
    <div className='page'>
      <h1>Nimekiri</h1>
      {list.map((person, index) =>
        <div key={index}>
          {person.firstname}{' '}
          {person.surname}{' '}
          {convertSexToEstonian(person.sex)}{' '}
          {convertUnixTimestampToDate(person.date)}{' '}
          {person.phone}{' '}
        </div>

      )}
      {/* <table>
        <thead>
          <tr>
            <th>
              <button>Eesnimi</button>
            </th>
            <th>
              <button>Perekonnanimi</button>
            </th>
            <th>
              <button>Sugu</button>
            </th>
            <th>
              <button>Sünnikuupäev</button>
            </th>
            <th>
              <button>Telefon</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Peeter</th>
            <th>Peterson</th>
            <th>Mees</th>
            <th>23.03.1933</th>
            <th>+372 54004941</th>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}

export default List