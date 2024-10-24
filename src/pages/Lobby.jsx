import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function Lobby() {
  const [roomCode, setRoomCode] = useState("");
  const [userName, setUserName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [isNewRoom, setIsNewRoom] = useState(false);
  const nav = useNavigate();

  const handleJoinRoom = () => {
    if (roomCode && userName) {
      socket.emit(
        "joinRoom",
        {
          roomId: roomCode,
          userName: userName,
          securityCode: isNewRoom ? "" : securityCode,
        },
        (response) => {
          if (response.status === "success") {
            alert(response.message);
            if (isNewRoom) {
              alert("Security Code is:- " + response.securityCode);
            }
            nav(`/room/${roomCode}`);
          } else {
            alert(response.status);
          }
        }
      );
    }
  };
  return (
    <>
      <center>
        <h2>{isNewRoom ? "Create a Room" : "Join a Room"} To Play</h2>
        <input
          type="text"
          placeholder="Enter Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {!isNewRoom && (
          <input
            type="text"
            placeholder="Enter Security Code"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          ></input>
        )}
        <button onClick={handleJoinRoom}>
          {isNewRoom ? "Create Room" : "Join Room"}
        </button>
        <p>
          {isNewRoom ? "Already have a room? " : "New here? "}
          <button onClick={() => setIsNewRoom(!isNewRoom)}>
            {isNewRoom ? "Join existing room" : "Create new room"}
          </button>
        </p>
      </center>
    </>
  );
}

export default Lobby;
