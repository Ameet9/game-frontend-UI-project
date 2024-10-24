import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameRoom from "./pages/GameRoom";
import Lobby from "./pages/Lobby";

function App() {
  return (
    <>
      <center>
        <h1>Game Project</h1>
      </center>
      <Router>
        <Routes>
          <Route path="/" element={<Lobby></Lobby>} />
          <Route path="/room/:roomId" element={<GameRoom></GameRoom>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
