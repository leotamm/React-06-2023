import { useState } from 'react';
import savedData from '../assets/table_data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

function SortButtons(props) {

    const [sortFirstNameToggle, setFirstNameSortToggle] = useState(0);
    const [sortLastNameToggle, setLastNameSortToggle] = useState(0);
    const [sortSexToggle, setSexSortToggle] = useState(0);
    const [sortDateToggle, setDateSortToggle] = useState(0);

    const sortByFirstName = () => {
        switch (sortFirstNameToggle) {
            case 0: setFirstNameSortToggle(1);      // sort list ascending
                props.list.sort((a, b) => a.firstname.localeCompare(b.firstname));
                props.setList(props.list.slice());
                break;
            case 1: setFirstNameSortToggle(2);      // sort list descending
                props.list.sort((a, b) => b.firstname.localeCompare(a.firstname));
                props.setList(props.list.slice());
                break;
            case 2: setFirstNameSortToggle(0);      // sort list default
                props.setList(savedData.list.slice());
                break;
            default: setFirstNameSortToggle(0)
        }
        setLastNameSortToggle(0);
        setSexSortToggle(0);
        setDateSortToggle(0);
    }

    const sortBySurname = () => {
        switch (sortLastNameToggle) {
            case 0: setLastNameSortToggle(1);      // sort list ascending
                props.list.sort((a, b) => a.surname.localeCompare(b.surname));
                props.setList(props.list.slice());
                break;
            case 1: setLastNameSortToggle(2);      // sort list descending
                props.list.sort((a, b) => b.surname.localeCompare(a.surname));
                props.setList(props.list.slice());
                break;
            case 2: setLastNameSortToggle(0);      // sort list default
                props.setList(savedData.list.slice());
                break;
            default: setLastNameSortToggle(0)
        }
        setFirstNameSortToggle(0)
        setSexSortToggle(0);
        setDateSortToggle(0);
    }

    const sortBySex = () => {
        switch (sortSexToggle) {
            case 0: setSexSortToggle(1);      // sort list ascending
                props.list.sort((a, b) => a.sex.localeCompare(b.sex));
                props.setList(props.list.slice());
                break;
            case 1: setSexSortToggle(2);      // sort list descending
                props.list.sort((a, b) => b.sex.localeCompare(a.sex));
                props.setList(props.list.slice());
                break;
            case 2: setSexSortToggle(0);      // sort list default
                props.setList(savedData.list.slice());
                break;
            default: setSexSortToggle(0)
        }
        setFirstNameSortToggle(0)
        setLastNameSortToggle(0);
        setDateSortToggle(0);
    }

    const sortByDate = () => {
        switch (sortDateToggle) {
            case 0: setDateSortToggle(1);      // sort list ascending
                props.list.sort((a, b) => a.date - b.date);
                props.setList(props.list.slice());
                break;
            case 1: setDateSortToggle(2);      // sort list descending
                props.list.sort((a, b) => b.date - a.date);
                props.setList(props.list.slice());
                break;
            case 2: setDateSortToggle(0);      // sort list default
                props.setList(savedData.list.slice());
                break;
            default: setDateSortToggle(0)
        }
        setFirstNameSortToggle(0)
        setLastNameSortToggle(0);
        setSexSortToggle(0);
    }

    return (
        <tr>
            <th onClick={() => sortByFirstName()}>Eesnimi{' '}
                {sortFirstNameToggle === 0 && <FontAwesomeIcon icon={faSort} size='lg' />}
                {sortFirstNameToggle === 1 && <FontAwesomeIcon icon={faSortDown} size='lg' />}
                {sortFirstNameToggle === 2 && <FontAwesomeIcon icon={faSortUp} size='lg' />}
            </th>
            <th onClick={() => sortBySurname()}>Perekonnanimi{' '}
                {sortLastNameToggle === 0 && <FontAwesomeIcon icon={faSort} size='lg' />}
                {sortLastNameToggle === 1 && <FontAwesomeIcon icon={faSortDown} size='lg' />}
                {sortLastNameToggle === 2 && <FontAwesomeIcon icon={faSortUp} size='lg' />}
            </th>
            <th onClick={() => sortBySex()}>Sugu{' '}
                {sortSexToggle === 0 && <FontAwesomeIcon icon={faSort} size='lg' />}
                {sortSexToggle === 1 && <FontAwesomeIcon icon={faSortDown} size='lg' />}
                {sortSexToggle === 2 && <FontAwesomeIcon icon={faSortUp} size='lg' />}
            </th>
            <th onClick={() => sortByDate()}>Sünnikuupäev{' '}
                {sortDateToggle === 0 && <FontAwesomeIcon icon={faSort} size='lg' />}
                {sortDateToggle === 1 && <FontAwesomeIcon icon={faSortDown} size='lg' />}
                {sortDateToggle === 2 && <FontAwesomeIcon icon={faSortUp} size='lg' />}
            </th>
            <th>Telefon</th>
        </tr>
    )
}

export default SortButtons