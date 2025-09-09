import './App.css'
import Archive from './pages/archive';
import HomePage from './pages/home'
import Bin from './pages/bin';
import { Routes, Route } from 'react-router-dom'

import Important from './pages/important';

function App() {


  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/important" element={<Important />} />
      <Route path="/bin" element={<Bin />} />



    </Routes>
  );
}

export default App
