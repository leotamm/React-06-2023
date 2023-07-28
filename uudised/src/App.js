import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';

function App() {
  return (
    <div>
      <Link to='/'>
        <button className='menu-button'>Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button className='menu-button'>Uudiste lehele</button>
      </Link>
      <Link to='/kontakt'>
        <button className='menu-button'>Võta ühendust</button>
      </Link>
      <Link to='/meist'>
        <button className='menu-button'>Meist</button>
      </Link>
      <Link to='/lisa-uudis'>
        <button className='menu-button'>Lisa uudis</button>
      </Link>
      <Link to='/halda'>
        <button className='menu-button'>Halda uudiseid</button>
      </Link>

      <Routes>
        <Route path='/' element={< Avaleht />} />
        <Route path='/uudised' element={< Uudised />} />
        <Route path='/kontakt' element={< Kontakt />} />
        <Route path='/meist' element={< Meist />} />
        <Route path='/lisa-uudis' element={< LisaUudis />} />
        <Route path='/halda' element={< HaldaUudiseid />} />
        <Route path='/uudis/:index' element={< YksUudis />} />
        <Route path='/muuda/:index' element={< MuudaUudis />} />
      </Routes>
    </div>
  );
}

export default App;
