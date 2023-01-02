import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AddEvent from './pages/addEvent';
import Events from './pages/events';
import LogIn from './pages/login';

function App() {
  const [organisation, setOrganisation] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Events />} />
          <Route path='/login' element={<LogIn organisation={organisation} setOrganisation={setOrganisation} />} />
          <Route path='/add-event' element={<AddEvent organisation={organisation} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
