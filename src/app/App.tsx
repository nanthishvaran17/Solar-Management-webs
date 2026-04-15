import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import AIPredictions from './components/AIPredictions';
import Marketplace from './components/Marketplace';
import Community from './components/Community';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/predictions" element={<AIPredictions />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}