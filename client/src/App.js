import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEvent from './pages/addEvent';
import Events from './pages/events';
import LogIn from './pages/login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Events />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/add-event' element={<AddEvent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
