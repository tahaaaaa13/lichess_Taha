import React from 'react';
const Profile = ({ profile }) => {
  if (!profile) {
    return <p>No profile data available.</p>;
  }

  return (
    <div>
      <img src={profile.profile?.image} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
      <h2>Username: {profile.username}</h2>
      <p>Bio: {profile.bio}</p>
      <p>Games Played: {profile.count?.all || 0}</p>
      <p>Rating: {profile.perfs?.blitz?.rating || 'N/A'}</p>
    </div>
  );
};

export default Profile;
