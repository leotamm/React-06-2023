import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';

function App() {
  return (
    <div>
      <img source="https://www.novelsuspects.com/wp-content/uploads/2022/02/Why-Well-Always-Love-Nordic-Noir-.png" alt=""/>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button>Uudiste lehele</button>
      </Link>
      <Link to='/kontakt'>
        <button>Võta ühendust</button>
      </Link>
      <Link to='/meist'>
        <button>Meist</button>
      </Link>
      <Routes>
        <Route path='/' element={ <Avaleht/>} />
        <Route path='/uudised' element={ <Uudised/> } />
        <Route path='/kontakt' element={ <Kontakt/>} />
        <Route path='/meist' element={ <Meist/>} />
      </Routes>
    </div>
  );
}

export default App;
