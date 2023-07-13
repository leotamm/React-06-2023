import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht'
import Meist from './pages/Meist'
import Kontakt from './pages/Kontakt'
import Seaded from './pages/Seaded'
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';
import './App.css';
import { useRef, useState } from 'react';

function App() {

  <button>Logi sisse</button>
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaLuger = useRef();
  const salas6naLuger = useRef();

  const logiSisse = () => {
    if (salas6naLuger.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum(kasutajaLuger.current.value + ", oled sisselogitud!");
    } else {
      muudaSonum("Vale parool!");
    }
  }

  return (
    <div className="App">

      <div>{sonum}</div>
      {sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label>
        <input ref={kasutajaLuger} type="text" />
        <label>Salasõna</label>
        <input ref={salas6naLuger} type="password" />
      </div>}

      {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button>}
      <br /><br />

      <Link to='/'>
        <button>Avalahele</button>
      </Link>
      <Link to='/meist'>
        <button>Meist</button>
      </Link>
      <Link to='/kontakt'>
        <button>Kontakt</button>
      </Link>
      <Link to='/seaded'>
        <button>Seaded</button>
      </Link>
      <Link to='/leht'>
        <button>Leht</button>
      </Link>
      <Link to='/loader'>
        <button>Loader</button>
      </Link>
      <Link to='/books'>
        <button>Books</button>
      </Link>
      <Link to='/numbrid'>
        <button>Numbrid</button>
      </Link>

      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='/meist' element={<Meist />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/seaded' element={<Seaded />} />
        <Route path='/leht' element={<Leht />} />
        <Route path='/loader' element={<Loader />} />
        <Route path='/books' element={<Books />} />
        <Route path='/numbrid' element={<Numbrid />} />
      </Routes>

    </div>
  );
}

export default App;