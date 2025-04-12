import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './components/Login.css';
import './components/Signup.css';

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
