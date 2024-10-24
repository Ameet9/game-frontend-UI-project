import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Lobby() {
  const [roomCode, setRoomCode] = useState("");
  const nav = useNavigate();

  const handleJoinRoom = () => {
    if (roomCode) {
      nav(`/room/${roomCode}`);
    }
  };
  return (
    <>
      <center>
        <input
          type="text"
          placeholder="Enter Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button onClick={handleJoinRoom}>Join Room</button>
      </center>
    </>
  );
}

export default Lobby;
