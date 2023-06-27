// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Lisatoode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Earth_Western_Hemisphere.jpg" alt="" />
      </Link>

      <Link to="/lisatoode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
      <button className="nupp">Ostukorv</button>
      </Link>
      <Routes>
        <Route path="" element={ <Avaleht/>}></Route>
        <Route path='lisatoode' element={ <Lisatoode/>}></Route>
        <Route path='ostukorv' element={ <Ostukorv/>}></Route>
      </Routes>Ostukorv
    </div>
  );
}

export default App;
