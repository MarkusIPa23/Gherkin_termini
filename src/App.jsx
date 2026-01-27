import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Translations from "./components/Translations";
import Feature from "./components/Feature";
import UserStory from "./components/UserStory";
import Scenarios from "./components/Scenarios";
import RubikCube from "./components/RubikCube";
import HappyPath from "./components/HappyPath";

function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Funkcionālo iezīmju veidošana ar Gherkin</h1>

      <Feature />
      <UserStory />
      <Scenarios />
      <RubikCube />
      <HappyPath />
    </main>
  );
}

export default App;