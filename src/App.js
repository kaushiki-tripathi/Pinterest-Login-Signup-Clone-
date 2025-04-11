import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import './Login.css';
import './Signup.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
