import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Intro from './pages/Intro';
import Article from './pages/Article';
import List from './pages/List';
import Life from './pages/Life';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/article' element={<Article />} />
        <Route path='/list' element={<List />} />
        <Route path='/life' element={<Life />} />
      </Routes>
    </div>
  );
}

export default App;
