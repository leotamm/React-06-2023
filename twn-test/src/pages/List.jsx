import React, { useEffect, useState } from 'react'
import savedData from '../assets/table_data.json'

function List() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://midaiganes.irw.ee/api/list?limit=500')
      .then(res => res.json())
      .then(data => setList(data.list))
  }, []);

  if (list.length === 0) {
    setList(savedData.list);
  }

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

      <table>
        <thead>
          <tr>
            <th>
              Eesnimi
            </th>
            <th>
              Perekonnanimi
            </th>
            <th>
              Sugu
            </th>
            <th>
              Sünnikuupäev
            </th>
            <th>
              Telefon
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((person, index) =>
            <tr key={index}>
              <th>{person.firstname}</th>
              <th>{person.surname}</th>
              <th>{convertSexToEstonian(person.sex)}</th>
              <th>{convertUnixTimestampToDate(person.date)}</th>
              <th>{person.phone}</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List