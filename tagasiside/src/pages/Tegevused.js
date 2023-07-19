import React from 'react'
import { useState } from 'react';
import tegevusedFailist from '../data/tegevused.json'


function Tegevused() {

    const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

    const sortUser1Activities = () => {
        const filteredActions = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(filteredActions);
    }

    const sortUser2Activities = () => {
        const filteredActions = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(filteredActions);
    }

    const sortUser3Activities = () => {
        const filteredActions = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(filteredActions);
    }

    const sortCompletedActivities = () => {
        const filteredActions = tegevused.filter(element => element.completed === true);
        uuendaTegevused(filteredActions);
    }

    const sortIncompleteActivities = () => {
        const filteredActions = tegevused.filter(element => element.completed === false);
        uuendaTegevused(filteredActions);
    }

    const sortActivitiesStartingWithT = () => {
        const filteredActions = tegevused.filter(element => element.title[0] === 't');
        uuendaTegevused(filteredActions);
    }

    const sortActivitiesWithUnder20Characters = () => {
        const filteredActions = tegevused.filter(element => element.title.length < 20);
        uuendaTegevused(filteredActions);
    }

    const resetList = () => {
        uuendaTegevused(tegevusedFailist);
    }

    return (<div>
        <div>Tegevusi kokku: {tegevused.length}</div><br />
        <button onClick={sortUser1Activities}>Näita kasutaja 1 tegevused</button>
        <button onClick={sortUser2Activities}>Näita kasutaja 2 tegevused</button>
        <button onClick={sortUser3Activities}>Näita kasutaja 3 tegevused</button>
        <button onClick={sortCompletedActivities}>Näita valmis tegevused</button>
        <button onClick={sortIncompleteActivities}>Näita mittevalmis tegevused</button>
        <button onClick={sortActivitiesStartingWithT}>Näita t-ga algavad tegevused</button>
        <button onClick={sortActivitiesWithUnder20Characters}>Näita alla 20 tähemärgiga tegevused</button>
        <button onClick={resetList}>Algnimekiri</button>
        {tegevused.map(element =>
            <div key={element.id}>
                <div>{element.userId}</div>
                <div>{element.id}</div>
                <div>{element.title}</div>
                <div>{element.completed ? 'Completed' : 'Not completed'}</div>
            </div>
        )}



    </div>
    )
}

export default Tegevused