import React, { useEffect, useState } from 'react'
import savedData from '../assets/table_data.json'
import SortButtons from '../components/SortButtons'

function List() {

  const [list, setList] = useState([]);
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
    else if (sex === 'm') {
      return 'Mees';
    }
    else {
      return 'teadmmata';
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

  const renderParagraphs = (rawData) => {
    let shorterText = '';
    const words = rawData.split(' ');
    if (words.length > 35) {
      words.length = 35;
      shorterText = words.join(' ') + '...';
    }
    const editedData = shorterText.replace(/<p>/g, '').replace(/<\/p>/g, '\n');
    return (
      <div>
        {editedData.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  }


  return (
    <div className='page'>
      <h1>Nimekiri</h1>
      <table>
        <thead>
          <SortButtons
            list={list}
            setList={setList}
          />
        </thead>
        <tbody>
          {list.map((person, index) => (
            <React.Fragment key={index}>
              <tr className='table-row' onClick={() => toggleRow(index)}>
                <td>{person.firstname}
                </td>
                <td>{person.surname}</td>
                <td>{convertSexToEstonian(person.sex)}</td>
                <td>{convertUnixTimestampToDate(person.date)}</td>
                <td>{person.phone}</td>
              </tr>
              <tr className={`table-row collapse ${index === selectedIndex ? 'show' : ''}`}>
                <td className='expanded-data' colSpan='2'>
                  <img className='personal-image' src={person.image.large} alt={person.image.alt} colSpan='3' />
                </td>
                <td className='expanded-text' colSpan='3'>
                  {renderParagraphs(person.body)}
                  {/* <p dangerouslySetInnerHTML={{ __html: person.body }} /> */}
                  <button>loe rohkem</button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List