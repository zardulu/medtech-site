import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nvcore from './components/Nvcore';
import Vtrack from './components/Vtrack'
import Vitals from './components/Vitals'
import Cpap from './components/Cpap'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/NV-Core" element={<Nvcore />} />
          <Route path="/V-Track" element={<Vtrack />} />
          <Route path="/Vitals" element={<Vitals />} />
          <Route path="/CPAP" element={<Cpap />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
