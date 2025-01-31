import './App.css'
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className='main-container'>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
