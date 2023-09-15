import React, { useEffect, useState } from 'react'
import savedData from '../assets/table_data.json'
import SortButtons from '../components/SortButtons'

function List() {

  const [list, setList] = useState([]);
  const [sortToggle, setSortToggle] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);

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

  const toggleRow = (index) => {
    setSelectedIndex(selectedIndex === index ? -1 : index);
  }


  return (
    <div className='page'>
      <h1>Nimekiri</h1>
      <table>
        <thead>
          <SortButtons
            list={list}
            setList={setList}
            sortToggle={sortToggle}
            setSortToggle={setSortToggle}
          />
        </thead>
        <tbody>
          {list.map((person, index) => (
            <React.Fragment key={index}>
              <tr className='table-row' onClick={() => toggleRow(index)}>
                <td>{person.firstname}</td>
                <td>{person.surname}</td>
                <td>{convertSexToEstonian(person.sex)}</td>
                <td>{convertUnixTimestampToDate(person.date)}</td>
                <td>{person.phone}</td>
              </tr>
              <tr className={`table-row collapse ${index === selectedIndex ? 'show' : ''}`}>
              <td>Additional data1</td>
              <td>Additional data2</td>
              <td>Additional data3</td>
              <td>Additional data4</td>
              <td>Additional data5</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List