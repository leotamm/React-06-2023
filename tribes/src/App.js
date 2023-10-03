import { Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      Hello Tribe Member!
      <br /><br />

      <Routes>
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
