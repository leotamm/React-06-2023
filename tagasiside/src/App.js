import { Link, Routes, Route } from "react-router-dom";
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";
import YksikTagasisideAndja from "./pages/YksikTagasisideAndja";


function App() {
  return (
    <div className="App">


      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/tagasiside'>
        <button>Tagasiside lehele</button>
      </Link>
      <Link to='/vastaja'>
        <button>Tagasiside andjad</button><br />
      </Link>


      <Routes>
        <Route path="/" element='Tere' />
        <Route path="/tagasiside" element={<Tagasiside/>} />
        <Route path="/vastaja" element={<TagasisideAndjad/>} />
        <Route path="/yksikVastaja:index" element={<YksikTagasisideAndja/>} />
      </Routes>
    </div>
  );
}

export default App;
