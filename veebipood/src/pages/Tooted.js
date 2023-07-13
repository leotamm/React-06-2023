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

  return (
    <div>
      {tooted.map((toode, index) =>
        <div key={index}>
          {toode}
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