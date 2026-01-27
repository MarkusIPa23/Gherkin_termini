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



    <main style={{ padding: "2rem", backgroundColor: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <h1>Funkcionālās iezīmes</h1>

      <p>
        Skatīt konspektēto materiālu:
        {" "}
        <a
          href="https://docs.google.com/document/d/176U6WBOJC5gEw0yW7h9XmdXLdZ6EhYbP3zoCu8e8-gk/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#9ecbff", textDecoration: "underline" }}
        >
          Google Docs
        </a>
      </p>
    </main>


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