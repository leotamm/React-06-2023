import { Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from '../src/pages/HomePage'
import TribeCalendar from "./pages/TribeCalendar";
import Chat from "./pages/Chat";
import Ideas from "./pages/Ideas";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import BottomNavBar from "./components/BottomNavBar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

function App() {

  return (
    <div className="App">
      <h1>Hello member!</h1>
      <BottomNavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/calendar' element={<TribeCalendar />} />
        <Route path='/ideas' element={<Ideas />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
