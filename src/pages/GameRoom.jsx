import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function GameRoom() {
  const { roomId } = useParams();

  useEffect(() => {
    socket.emit("joinRoom", roomId);
    socket.on("message", (message) => {
      console.log(message);
    });
  }, [roomId]);

  return (
    <div>
      <h1>Room Id: {roomId}</h1>
      <p>Game willl start...</p>
    </div>
  );
}

export default GameRoom;
