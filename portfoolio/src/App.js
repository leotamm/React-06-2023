import './App.css';
import CarCollection from './Pages/CarCollection';
import Convetions from './Pages/Convetions';
import RetroCars from './Pages/RetroCars';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img className='main-picture' src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgyODcyMzA1NDMx/dodge-deora-1965.jpg' alt='Dodge Deora 1965' />
      <div className='rectangle'></div>

      <div className='navigation-pictures'>
        <Link className='main-link' to='/retro-cars'>
          <img src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgyODcwNjY3MDMx/phantom-corsair-1938.jpg' alt='Phanton Crossair 1938' />
          <p>Retro cars</p>
        </Link>
        <Link className='main-link' to='car-collection'>
          <img src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgyODcwNDA0ODg3/cadillac-cyclone-1959.jpg' alt='Cadillac Cyclone 1959' />
          <p>Car collection</p>
        </Link>
        <Link className='main-link' to='conventions'>
          <img src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgyODcwODYzNjM5/ford-gyron-1961.jpg' alt='Ford Gyron 1961' />
          <p>Conventions</p>
        </Link>
      </div>

      <Routes>
        <Route path='retro-cars' element={<RetroCars />} />
        <Route path='car-collection' element={<CarCollection />} />
        <Route path='conventions' element={<Convetions />} />
      </Routes>
    </div>
  );
}

export default App;
