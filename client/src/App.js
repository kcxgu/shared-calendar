import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Events from './pages/events';
import LogIn from './pages/login';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [currentUser, setCurrentUser] = useState("")


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Events currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path='/member-area' element={<LogIn currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          {/* <Route path='/add-event' element={<AddEvent currentUser={currentUser} setCurrentUser={setCurrentUser} />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
