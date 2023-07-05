import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';

import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';
import Ilmumine from './pages/Ilmumine';

function App() {
  return (
    <div className="App">

      <Link to='/kujundus'>
        <button>Kujundus</button>
      </Link>

      <Link to='/muutmine'>
        <button>Muutmine</button>
      </Link>

      <Link to='/ilmumine'>
        <button>Ilmumine</button>
      </Link>

<Routes>
    <Route path='/' element={ <Navigate to='/ilmumine' /> } />
    <Route path='/kujundus' element={ <Kujundus/> } />
    <Route path='/muutmine' element={ <Muutmine/> } />
    <Route path='/ilmumine' element={ <Ilmumine/> } />
</Routes>

    </div>
  );
}

export default App;
