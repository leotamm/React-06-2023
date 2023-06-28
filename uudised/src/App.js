import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <div>See on avaleht, nähtav localhost:3000 aadressil</div>} />
        <Route path='/uudised' element={ <div>See on avaleht, nähtav localhost:3000/uudised aadressil</div>} />
        <Route path='/kontakt' element={ <div>See on avaleht, nähtav localhost:3000/kontakt aadressil</div>} />
        <Route path='/meist' element={ <div>See on avaleht, nähtav localhost:3000/meist aadressil</div>} />
      </Routes>
    </div>
  );
}

export default App;
