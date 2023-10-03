import { Routes, Route } from "react-router-dom";
import './App.css';
import TribeCalendar from "./pages/TribeCalendar";
import Chat from "./pages/Chat";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Hello Tribe Member!</h1>
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
