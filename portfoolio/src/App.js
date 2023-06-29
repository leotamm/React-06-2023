import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img className='main-picture' src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgzMTM5MDM2OTUx/dymaxion-1933.jpg' alt='Dynamaxion 1933' />
      <div className='rectangle'></div>

      <div className='navigation-pictures'>
        <Link to='retro-cars'>
          <img src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgzMTM5Mjk5MDk1/oldsmobile-golden-rocket-1956.jpg' alt='Oldsmobile Golden Rocket 1956' />
        </Link>
        <Link to='car-collection'>
          <img src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgyODcwNDA0ODg3/cadillac-cyclone-1959.jpg' alt='Cadillac Cyclone 1959' />
        </Link>
        <Link to='convetions'>
          <img src='https://www.thestreet.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTY4NTE3MjgyODcwODYzNjM5/ford-gyron-1961.jpg' alt='Ford Gyron 1961' />
        </Link>
      </div>

      <Routes>
        <Route path='retro-cars' element={<div>Retro cars</div>} />
        <Route path='car-collection' element={<div>Car collection</div>} />
        <Route path='conventions' element={<div>Conventions</div>} />
      </Routes>
    </div>
  );
}

export default App;
