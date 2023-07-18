import { useState } from "react";
import tootedFailist from '../data/tooted.json'
import ostukorviFail from '../data/ostukorv.json'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function Tooted() {

  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (toode) => {
    ostukorviFail.push(toode);
    toast.success("Superluks!")
  }

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice())
  }

  const sorteeriZA = () => {
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice())
  }

  const sorteeriHindKasvav = () => {
    tooted.sort((a, b) => a.hind - b.hind);
    uuendaTooted(tooted.slice())
  }

  const sorteeriHindKahanev = () => {
    tooted.sort((a, b) => b.hind - a.hind);
    uuendaTooted(tooted.slice())
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasvav}>Sorteeri hind kasvab</button>
      <button onClick={sorteeriHindKahanev}>Sorteeri hind kahaneb</button>
      {tooted.map((toode, index) =>
        <div key={index}>
          <img className='pilt' src={toode.pilt} alt='' />
          {toode.nimi} - {toode.hind} €
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          <Link to={'/toode/' + index}>
            <button>Vaata detailsemalt</button>
          </Link>
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default Tooted