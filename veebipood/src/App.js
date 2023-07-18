// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Lisatoode from './pages/Lisatoode';
import Ostukorv from './pages/Ostukorv';
import { useState } from 'react';
import Seaded from './pages/Seaded';
import Hinnad from './pages/HInnad';
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToodet from './pages/MuudaToodet';
import YksikToode from './pages/YksikToode';
import YksikPood from './pages/YksikPood';
import NotFound from './pages/NotFound';

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

      {teema === 'hele' && <button onClick={uuendaTeemaTume}>Tume leht</button>}
      {teema === 'tume' && < button onClick={uuendaTeemaHele}>Hele leht</button>}

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

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/halda">
        <button className="nupp">Halda tooteid</button>
      </Link>


      <Routes>
        <Route path="" element={<Avaleht />}></Route>
        <Route path='lisatoode' element={<Lisatoode />}></Route>
        <Route path='ostukorv' element={<Ostukorv />}></Route>
        <Route path='seaded' element={<Seaded />}></Route>
        <Route path='hinnad' element={<Hinnad />}></Route>
        <Route path='poed' element={<Poed />}></Route>
        <Route path='tooted' element={<Tooted />}></Route>
        <Route path='halda' element={<HaldaTooteid />}></Route>
        <Route path='muuda/:jrknr' element={<MuudaToodet />}></Route>
        <Route path='toode/:index' element={<YksikToode />}></Route>
        <Route path='pood/:yksPood' element={<YksikPood />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>Ostukorv
    </div>
  );
}

export default App;
