import React from 'react'
import savedData from '../assets/table_data.json'

function SortButtons(props) {

    const toggleSortMethod = () => {
        if (props.sortToggle === 2) {
            props.setSortToggle(0)
        }
        if (props.sortToggle < 2) {
            props.setSortToggle(props.sortToggle + 1)
        }
    }

    const sortByFirstName = () => {
        toggleSortMethod();
        if (props.sortToggle === 0) {  // sort list ascending
            props.list.sort((a, b) => a.firstname.localeCompare(b.firstname));
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 1) {  // sort list descending
            props.list.sort((a, b) => b.firstname.localeCompare(a.firstname));
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 2) {  // sort list default
            props.setList(savedData.list.slice());
        }
    }

    const sortBySurname = () => {
        toggleSortMethod();
        if (props.sortToggle === 0) {  // sort list ascending
            props.list.sort((a, b) => a.surname.localeCompare(b.surname));
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 1) {  // sort list descending
            props.list.sort((a, b) => b.surname.localeCompare(a.surname));
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 2) {  // sort list default
            props.setList(savedData.list.slice());
        }
    }

    const sortBySex = () => {
        toggleSortMethod();
        if (props.sortToggle === 0) {  // sort list ascending
            props.list.sort((a, b) => a.sex.localeCompare(b.sex));
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 1) {  // sort list descending
            props.list.sort((a, b) => b.sex.localeCompare(a.sex));
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 2) {  // sort list default
            props.setList(savedData.list.slice());
        }
    }

    const sortByDate = () => {
        toggleSortMethod();
        if (props.sortToggle === 0) {  // sort list ascending
            props.list.sort((a, b) => a.date - b.date);
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 1) {  // sort list descending
            props.list.sort((a, b) => b.date - a.date);
            props.setList(props.list.slice());
        }
        if (props.sortToggle === 2) {  // sort list default
            props.setList(savedData.list.slice());
        }
    }

    return (
        <tr>
            <th onClick={() => sortByFirstName()}>Eesnimi</th>
            <th onClick={() => sortBySurname()}>Perekonnanimi</th>
            <th onClick={() => sortBySex()}>Sugu</th>
            <th onClick={() => sortByDate()}>Sünnikuupäev</th>
            <th>Telefon</th>
        </tr>
    )
}

export default SortButtons