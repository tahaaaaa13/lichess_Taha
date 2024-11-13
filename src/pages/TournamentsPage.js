// src/pages/TournamentsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TournamentsPage() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get('https://lichess.org/api/tournaments');
        setTournaments(response.data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };
    fetchTournaments();
  }, []);

  return (
    <div>
      <h1>Lichess Tournaments</h1>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            <h3>{tournament.name}</h3>
            <p>{tournament.startDate}</p>
            <p>{tournament.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TournamentsPage;
