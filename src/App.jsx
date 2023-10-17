import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import "../src/style.scss";

function App() {
  return (
    <div>
      <img src="https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="un bol de ramen" />
      <h1>🇯🇵 Ramen moi ici 🇯🇵</h1>
      <p>Le meilleur restaurant de Ramen de la ville de Lille. Un délice ! Même Naruto n'a jamais pu manger ça de toute sa vie, même en étant Hokage.</p>
      <p> ⭐ Notes : 4,9/5 ⭐ </p>
      <img
        src="https://media4.giphy.com/media/RTp3RsNNdq37y/giphy.gif?cid=ecf05e47zsez236eki4nbx3xcg0yk57c40fg0rr4f4qsrapu&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Un bol de ramen animé"
      />
    </div>
  );
}

export default App;
