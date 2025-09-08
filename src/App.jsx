import './App.css'
import Archive from './pages/archive';
import HomePage from './pages/home'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/archive" element={<Archive />} />



    </Routes>
  );
}

export default App
