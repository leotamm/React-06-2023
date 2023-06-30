import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';

function App() {
  return (
    <div className="App">

      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/lisa-tegelane'>
        <button>Tegelasi lisama</button>
      </Link>
      <Link to='/valitud-tegelased'>
        <button>Tegelasi vaatama</button>
      </Link>

      <Routes>
        <Route path='/' element={ <Avaleht/> }/>
        <Route path='/lisa-tegelane' element={ <LisaTegelane/> }/>
        <Route path='/valitud-tegelased' element={ <ValitudTegelased/> }/>
      </Routes>

    </div>
  );
}

export default App;
