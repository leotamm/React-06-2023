import React from 'react'
import { useState } from 'react'
import kasutajadFailist from '../data/users.json'

function Kasutajad() {

    const [kasutajad, uuendaKasutajad] = useState(kasutajadFailist);

    const refreshList = () => {
        uuendaKasutajad(kasutajadFailist);
    }

    const showUSerames10CharactersOrMore = () => {
        const uusNimekiri = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        uuendaKasutajad(uusNimekiri);
    }

    const deleteUserId = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index, 1);
        uuendaKasutajad(kasutajad.slice());
    }

    const logUserLucioIndex = () => {
        const findLucioIndex = kasutajad.findIndex(user => user.email === 'Lucio_Hettinger@annie.ca');
        console.log(findLucioIndex);
    }

    const logFirstUserStartingWithC = () => {
        const findFirstUserWithCIndex = kasutajad.find(user => user.name.substring(0, 1) === 'C').name;
        console.log(findFirstUserWithCIndex);
    }

    const sortByLatValue = () => {
        kasutajad.sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        uuendaKasutajad(kasutajad.slice());
    }

    const filterPositiveLngValues = () => {
        const filtered = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0);
        uuendaKasutajad(filtered.slice());
    }

    const logUserIdSum = () => {
        let sum = 0;
        kasutajad.forEach(kasutaja => sum += kasutaja.id);
        console.log(sum);
    }

    const addPhonePrefixes = () => {
        kasutajad.forEach(kasutaja => kasutaja.phone = '000' + kasutaja.phone);
        uuendaKasutajad(kasutajad.slice());
    }

    const createEmailArray = () => {
        const emailArray = kasutajad.map(kasutaja => kasutaja.email);
        console.log(emailArray);
    }

    const replaceCatchphraseLetter = () => {
        const substituted = kasutajad.map(kasutaja => (
            { ...kasutaja, company: { ...kasutaja.company, catchPhrase: kasutaja.company.catchPhrase.replaceAll('a', 'e') } }
        ));
        uuendaKasutajad(substituted);
    }


    return (
        <div>
            <div>Valikus {kasutajad.length} kasutajat</div>
            <button onClick={refreshList}>Algnimekiri</button>
            <button onClick={showUSerames10CharactersOrMore}>Kuva 10 või enama tähega kasutajanimed</button>
            <button onClick={logUserLucioIndex}>Logi konsooli kasutaja „Lucio_Hettinger@annie.ca“ indeks</button>
            <button onClick={logFirstUserStartingWithC}>Logi konsooli esimene C-ga algav kasutaja</button>
            <button onClick={sortByLatValue}>Sorteeri lat väärtuse järgi</button>
            <button onClick={filterPositiveLngValues}>Filtreeri positiivsed lng väärtused</button>
            <button onClick={logUserIdSum}>Logi konsooli user id summa</button>
            <button onClick={addPhonePrefixes}>Lisa kõigi telefonidele 000 eesliide</button>
            <button onClick={createEmailArray}>Uus massiv emailides</button>
            <button onClick={replaceCatchphraseLetter}>Asenda 'a'-d  'e'-ga</button>
            {kasutajad.map(kasutaja =>
                <div key={kasutaja.id}>
                    <div>id: {kasutaja.id} <button onClick={() => deleteUserId(kasutaja)}>Kustuta</button> </div>
                    <div>Nimi: {kasutaja.name}</div>
                    <div>Kasutajanimi: {kasutaja.username}</div>
                    <div>Email: {kasutaja.email}</div>
                    <div>Aadress: {kasutaja.address.street} {kasutaja.address.suite}
                        {kasutaja.address.city} {kasutaja.address.zipcode}</div>
                    <div>Geo: lat {kasutaja.address.geo.lat} long {kasutaja.address.geo.lng}</div>
                    <div>Telefon: {kasutaja.phone}</div>
                    <div>Koduleht: {kasutaja.website}</div>
                    <div>Töökoht: {kasutaja.company.name}</div>
                    <div>Hüüdlause: {kasutaja.company.catchPhrase}</div>
                    <div>bs: {kasutaja.company.bs}</div>
                    <br />
                </div>
            )}
        </div>
    )
}

export default Kasutajad