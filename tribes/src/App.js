import { Routes, Route } from "react-router-dom";
import './index.css';
import TribeCalendar from "./pages/TribeCalendar";
import Chat from "./pages/Chat";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import 'react-big-calendar/lib/css/react-big-calendar.css'

function App() {
  return (
    <div className="App">
      <h1>Hello member!</h1>
      <Routes>
        <Route path='/calendar' element={<TribeCalendar />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
