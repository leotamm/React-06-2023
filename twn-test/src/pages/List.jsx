import React, { useEffect, useState } from 'react'
import savedData from '../assets/table_data.json'

function List() {

  const [list, setList] = useState([]);
  const [sortToggle, setSortToggle] = useState(0);

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

  const toggleSortMethod = () => {
    if (sortToggle === 2) {
      setSortToggle(0)
    }
    if (sortToggle < 2) {
      setSortToggle(sortToggle + 1)
    }
  }

  const sortByFirstName = () => {
    toggleSortMethod();
    if (sortToggle === 0) {  // sort list ascending
      list.sort((a, b) => a.firstname.localeCompare(b.firstname));
      setList(list.slice());
    }
    if (sortToggle === 1) {  // sort list descending
      list.sort((a, b) => b.firstname.localeCompare(a.firstname));
      setList(list.slice());
    }
    if (sortToggle === 2) {  // sort list default
      setList(savedData.list.slice());
    }
  }

  const sortBySurname = () => {
    toggleSortMethod();
    if (sortToggle === 0) {  // sort list ascending
      list.sort((a, b) => a.surname.localeCompare(b.surname));
      setList(list.slice());
    }
    if (sortToggle === 1) {  // sort list descending
      list.sort((a, b) => b.surname.localeCompare(a.surname));
      setList(list.slice());
    }
    if (sortToggle === 2) {  // sort list default
      setList(savedData.list.slice());
    }
  }

  const sortBySex = () => {
    toggleSortMethod();
    if (sortToggle === 0) {  // sort list ascending
      list.sort((a, b) => a.sex.localeCompare(b.sex));
      setList(list.slice());
    }
    if (sortToggle === 1) {  // sort list descending
      list.sort((a, b) => b.sex.localeCompare(a.sex));
      setList(list.slice());
    }
    if (sortToggle === 2) {  // sort list default
      setList(savedData.list.slice());
    }
  }

  const sortByDate = () => {
    toggleSortMethod();
    if (sortToggle === 0) {  // sort list ascending
      list.sort((a, b) => a.date - b.date);
      setList(list.slice());
    }
    if (sortToggle === 1) {  // sort list descending
      list.sort((a, b) => b.date - a.date);
      setList(list.slice());
    }
    if (sortToggle === 2) {  // sort list default
      setList(savedData.list.slice());
    }
  }


  return (
    <div className='page'>
      <h1>Nimekiri</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortByFirstName()}>Eesnimi</th>
            <th onClick={() => sortBySurname()}>Perekonnanimi</th>
            <th onClick={() => sortBySex()}>Sugu</th>
            <th onClick={() => sortByDate()}>Sünnikuupäev</th>
            <th>Telefon</th>
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