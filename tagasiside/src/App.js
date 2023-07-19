import { Link, Routes, Route } from "react-router-dom";
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";
import YksikTagasisideAndja from "./pages/YksikTagasisideAndja";
import Tegevused from "./pages/Tegevused";


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
        <button>Tagasiside andjad</button>
      </Link>
      <Link to='/tegevused'>
        <button>Tegevused</button><br />
      </Link>


      <Routes>
        <Route path="/" element='Tere' />
        <Route path="/tagasiside" element={<Tagasiside/>} />
        <Route path="/vastaja" element={<TagasisideAndjad/>} />
        <Route path="/yks-andja/:index" element={<YksikTagasisideAndja/>} />
        <Route path="/tegevused" element={<Tegevused/>} />
      </Routes>
    </div>
  );
}

export default App;
