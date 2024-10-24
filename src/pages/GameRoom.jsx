import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import React, { useEffect } from "react";

const socket = io.connect("http://localhost:5000");

function GameRoom() {
  const { roomId } = useParams();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    socket.on("message", (message) => {
      console.log(message);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
    };
  }, []);
  // const userJoinRoom = () => {
  //   console.log("Attempting to join room:", roomId);
  //   socket.emit("joinRoom", roomId);
  //   socket.on("message", (message) => {
  //     console.log(message);
  //   });
  // };
  // const findAllRooms = () => {
  //   socket.emit("findAllRooms", roomId);
  //   socket.on("message", (message) => {
  //     console.log(message);
  //   });
  // };
  return (
    <div>
      <h1>Room Id: {roomId}</h1>
      <p>Game will start...</p>
      {/* <button onClick={userJoinRoom}>Join</button> */}
      {/* <button onClick={findAllRooms}>all rooms</button> */}
    </div>
  );
}

export default GameRoom;
