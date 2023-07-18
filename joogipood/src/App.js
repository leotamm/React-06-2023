import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';

function App() {



  return (
    <div className="App">

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/lisa">
        <button>Jooke lisama</button>
      </Link>
      <Link to="/halda">
        <button>Jooke haldama</button>
      </Link>

      <Routes>
        <Route path="/" element={<Avaleht/>}></Route>
        <Route path="/lisa" element={<LisaJook/>}></Route>
        <Route path="/halda" element={<HaldaJooke/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
