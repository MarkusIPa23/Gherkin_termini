import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Translations from "./components/Translations";

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <Translations />
    </main>
  );
}

export default App;