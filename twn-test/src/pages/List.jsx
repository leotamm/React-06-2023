import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import savedData from '../assets/table_data.json'
import SortButtons from '../components/SortButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function List() {

  const [list, setList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

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
      return 'teadmata';
    }
  }

  const convertUnixTimestampToDate = (unixTimestamp) => {
    const newDate = new Date(unixTimestamp * 1000).toLocaleString();
    const index = String(newDate).indexOf(',');
    return String(newDate).slice(0, index);
  }

  const toggleRow = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
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

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const displayedData = list.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    if ((currentPage <= 1 && pageNumber === 0) ||
      (currentPage >= 4 && pageNumber === 5)) {
      return;
    }
    if (currentPage > 1 && pageNumber === 0) {
      setCurrentPage(currentPage - 1);
      return;
    }
    if (currentPage < 4 && pageNumber === 5) {
      setCurrentPage(currentPage + 1);
      return;
    }
    setCurrentPage(pageNumber);
  }

  const gotoArticle = (id) => {
    navigate('/article/' + id);
    return id;
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
          {displayedData.map((person, index) => (
            <React.Fragment key={index}>
              <tr className={`table-row ${index === selectedIndex ? 'selected' : ''}`} onClick={() => toggleRow(index)}>
                <td className='tighter-text'>{person.firstname}</td>
                <td className='tighter-text'>{person.surname}</td>
                <td className='tighter-text'>{convertSexToEstonian(person.sex)}</td>
                <td className='tighter-text'>{convertUnixTimestampToDate(person.date)}</td>
                <td className='tighter-text'>{person.phone}</td>
              </tr>
              <tr className={`table-row collapse ${index === selectedIndex ? 'show' : ''}`}>
                <td className='expanded-data' colSpan='2'>
                  <img className='personal-image' src={person.image.large} alt={person.image.alt} colSpan='3' />
                </td>
                <td className='expanded-text' colSpan='3'>
                  {renderParagraphs(person.body)}
                  {/* <p dangerouslySetInnerHTML={{ __html: person.body }} /> */}
                  <button as={Link} to={'/article/' + person.id} onClick={() => gotoArticle(person.id)}>loe rohkem</button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <FontAwesomeIcon icon={faAngleLeft} size="xl" onClick={() => handlePageChange(0)} />
        <span className='pag-page' onClick={() => handlePageChange(1)}> 1 </span>
        <span className='pag-page' onClick={() => handlePageChange(2)}> 2 </span>
        <span className='pag-page' onClick={() => handlePageChange(3)}> 3 </span>
        <span className='pag-page' onClick={() => handlePageChange(4)}> 4 </span>
        <FontAwesomeIcon icon={faAngleRight} size="xl" onClick={() => handlePageChange(5)} />
      </div>
    </div>
  )
}

export default List