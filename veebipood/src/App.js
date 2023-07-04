// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Lisatoode from './pages/Lisatoode';
import Ostukorv from './pages/Ostukorv';
import { useState } from 'react';
import Seaded from './pages/Seaded';

function App() {

  const [teema, uuendaTeema] = useState(localStorage.getItem('teema') || 'hele');

  const uuendaTeemaTume = () => {
    uuendaTeema('tume');
    localStorage.setItem('teema', 'tume');
  } 

  const uuendaTeemaHele = () => {
    uuendaTeema('hele');
    localStorage.setItem('teema', 'hele');
  } 


  return (
    <div className={teema}>
      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Earth_Western_Hemisphere.jpg" alt="" />
      </Link>

      <br></br><br></br>

      { teema === 'hele' && <button onClick={uuendaTeemaTume}>Tume leht</button>}
      { teema === 'tume' && < button onClick={uuendaTeemaHele}>Hele leht</button>}

      <br></br><br></br>

      <Link to="/lisatoode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
      <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/seaded">
      <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht/>}></Route>
        <Route path='lisatoode' element={ <Lisatoode/>}></Route>
        <Route path='ostukorv' element={ <Ostukorv/>}></Route>
        <Route path='seaded' element={ <Seaded/>}></Route>
      </Routes>Ostukorv
    </div>
  );
}

export default App;
