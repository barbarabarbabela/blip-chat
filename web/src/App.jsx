
import './App.css'
import HistoryPage from './components/history-page';
import HomePage from './components/home-page'
import LoginPage from './components/login-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contato" element={<HistoryPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
