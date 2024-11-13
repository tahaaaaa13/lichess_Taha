import React, { useState } from 'react';
import { getUserProfile } from '../services/api';
import Profile from '../components/Profile';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  const handleFetchProfile = async () => {
    if (!username) return;
    const data = await getUserProfile(username);
    setProfile(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Lichess Profile</h1>
      <input
        type="text"
        placeholder="Enter Lichess username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleFetchProfile}>Search</button>
      <Profile profile={profile} />
    </div>
  );
};

export default ProfilePage;
