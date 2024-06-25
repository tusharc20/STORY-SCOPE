import React, { useState } from 'react';

const Lobby = ({ onStartGame }) => {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const handleRoomCodeChange = (e) => {
    const code = e.target.value.toUpperCase();
    if (code.length <= 4 && /^[A-Z0-9]*$/.test(code)) {
      setRoomCode(code);
    }
  };

  return (
    <div className="bg-custom-pattern bg-cover bg-center h-64 w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Poker Lobby</h1>
      <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 mb-4">
        {players.map((player, index) => (
          <li key={index} className="border-b last:border-b-0 p-2">
            {player}
          </li>
        ))}
      </ul>

      <form className="w-full max-w-md mb-4">
        <input
          type="text"
          value={roomCode}
          onChange={handleRoomCodeChange}
          placeholder="Enter room code"
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Join Room
        </button>
      </form>

      <form className="w-full max-w-md flex mb-4">
        <input
          type="text"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="Enter player name"
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
      </form>

      <button
        onClick={() => onStartGame(players)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Create Room
      </button>
    </div>
  );
};

export default Lobby;
