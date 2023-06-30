import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht'
import Meist from './pages/Meist'
import Kontakt from './pages/Kontakt'
import Seaded from './pages/Seaded'
import './App.css';

function App() {
  return (
    <div className="App">
     
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

<Routes>
  <Route path='/' element={<Avaleht/>}/>
  <Route path='/meist' element={<Meist/>}/>
  <Route path='/kontakt' element={<Kontakt/>}/>
  <Route path='/seaded' element={<Seaded/>}/>
</Routes>

    </div>
  );
}

export default App;