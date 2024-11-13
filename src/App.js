import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage';
import TournamentsPage from './pages/TournamentsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/leaderboards" element={<LeaderboardPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
