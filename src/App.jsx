import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MovieProvider } from "./contexts/MovieContext";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Header />
        <List />
      </MovieProvider>
    </div>
  );
}

export default App;
