import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gmail" element={<div>Gmail Page</div>} /> 
        <Route path="/images" element={<div>Images Page</div>} /> 
      </Routes>
      <Hero />
    </Router>
  );
}

export default App;
