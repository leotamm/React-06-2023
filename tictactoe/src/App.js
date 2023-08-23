import './App.css';
import { Routes, Route } from 'react-router-dom';
import Players from './pages/Players';
import Game from './pages/Game';
import Scores from './pages/Scores';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Players/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/scores' element={<Scores/>}/>
      </Routes>
    </div>
  );
}

export default App;
