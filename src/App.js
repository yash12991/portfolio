import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About'; // Import other components/pages
import Projects from './Pages/Projects/Projects';
import Home from './Pages/Home/Home';
import Certifications from './Pages/Certifications/Certifications';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [mode,setmode]=useState('dark');
  const toggleMode = () => {
    setmode(mode === 'dark' ? 'light' : 'dark');
  };
const appstyle={
  backgroundColor: mode === 'light' ? '#f4f4f4' : 'rgb(10, 0, 156)', // Navbar background
  color: mode === 'light' ? '#fff' : '#000', // Navbar text color
  transition: 'background-color 0.3s ease, color 0.3s ease',
}

  return (
    <div className="App" style={appstyle}>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/abouts" element={<About/>} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} 
          
          
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
