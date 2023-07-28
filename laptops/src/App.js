import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuteid from './pages/LisaArvuteid';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">

      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/all'>
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to='/add'>
        <button>Lisa sülarvuti</button>
      </Link>
      <Link to='/cart'>
        <button>Ostukorv</button>
      </Link>

      <Routes>
        <Route path='' exact element={<Avaleht />} />
        <Route path='all' exact element={<VaataArvuteid />} />
        <Route path='add' exact element={<LisaArvuteid />} />
        <Route path='cart' exact element={<Ostukorv />} />
      </Routes>
    </div>
  );
}

export default App;
