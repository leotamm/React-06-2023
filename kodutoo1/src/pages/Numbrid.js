import React, { useState } from 'react'

function Numbrid() {

    const [numbrid, uuendaNumbreid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 56, 103]);

    const nimekirjaReset = () => {
        uuendaNumbreid([4, 23, 7, 39, 19, 0, 9, 14, 135, 56, 103]);
    }

    const sortAscending = () => {
        numbrid.sort((a, b) => a - b);
        uuendaNumbreid(numbrid.slice());
    }

    const sortDecending = () => {
        numbrid.sort((a, b) => b - a);
        uuendaNumbreid(numbrid.slice());
    }

    const sortByFirstNumberAscending = () => {
        // const esimeneNumber = numbrid.map((yksNumber) => {
        //     const number = yksNumber.toString()[0];
        //     return { algNumber: yksNumber, vastus: number };
        // })
        // esimeneNumber.sort((a, b) => a.vastus - b.vastus);
        // const uusNimekiri = esimeneNumber.map((yhik) => yhik.algNumber);
        // uuendaNumbreid(uusNimekiri.slice());

        // CGPT lihtsam lahendus
        numbrid.sort((a, b) => {
            const firstDigitA = parseInt(a.toString()[0]);
            const firstDigitB = parseInt(b.toString()[0]);
            return firstDigitA - firstDigitB;
        });
        uuendaNumbreid(numbrid.slice());
    }

    const sortByFirstNumberDescending = () => {
        // const esimeneNumber = numbrid.map((yksNumber) => {
        //     const number = yksNumber.toString()[0];
        //     return { algNumber: yksNumber, vastus: number };
        // })
        // esimeneNumber.sort((a, b) => b.vastus - a.vastus);
        // const uusNimekiri = esimeneNumber.map((yhik) => yhik.algNumber);
        // uuendaNumbreid(uusNimekiri.slice());

        // CGPT lihtsam lahendus
        numbrid.sort((a, b) => {
            const firstDigitA = parseInt(a.toString()[0]);
            const firstDigitB = parseInt(b.toString()[0]);
            return firstDigitB - firstDigitA;
        });
        uuendaNumbreid(numbrid.slice());
    }

    const filterLargerThan8 = () => {
        const uusNimekiri = numbrid.filter(yksNumber => yksNumber > 8);
        uuendaNumbreid(uusNimekiri.slice());
    }

    const filterSmallerThan10 = () => {
        const uusNimekiri = numbrid.filter(yksNumber => yksNumber < 10);
        uuendaNumbreid(uusNimekiri.slice());
    }

    const filterEvenNumbers = () => {
        const uusNimekiri = numbrid.filter(yksNumber => yksNumber % 2 === 0);
        uuendaNumbreid(uusNimekiri.slice());
    }

    const filterOddNumbers = () => {
        const uusNimekiri = numbrid.filter(yksNumber => yksNumber % 2 !== 0);
        uuendaNumbreid(uusNimekiri.slice());
    }

    const filterNumbersStartingWith1 = () => {
        const uusNimekiri = numbrid.filter(yksNumber => yksNumber.toString().startsWith('1'));
        uuendaNumbreid(uusNimekiri.slice());
    }

    const filterNumbersContaining3 = () => {
        const uusNimekiri = numbrid.filter(yksNumber => yksNumber.toString().includes('3'));
        uuendaNumbreid(uusNimekiri.slice());
    }

    return (
        <div><br />
            <button onClick={nimekirjaReset}>Taasta algnumbrid</button>
            {numbrid.map((number, index) => <div key={index}>{number}</div>)}
            <button onClick={sortAscending}>Sorteeri kasvavalt</button>
            <button onClick={sortDecending}>Sorteeri kahanevalt</button>
            <button onClick={sortByFirstNumberAscending}>Sorteeri esimese numbri järgi kasvavalt</button>
            <button onClick={sortByFirstNumberDescending}>Sorteeri esimese numbri järgi kahanevalt</button>
            <button onClick={filterLargerThan8}>Filtreeri 8-st suuremad</button>
            <button onClick={filterSmallerThan10}>Filtreeri 10-st väiksemad</button>
            <button onClick={filterEvenNumbers}>Filtreeri paarisarvud</button>
            <button onClick={filterOddNumbers}>Filtreeri paaritud arvud</button>
            <button onClick={filterNumbersStartingWith1}>Filtreeri 1-ga algavad</button>
            <button onClick={filterNumbersContaining3}>Filtreeri 3-e sisaldavad</button>
        </div>
    )
}

export default Numbrid