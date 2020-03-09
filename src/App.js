import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header title="My Github Resumé" />
      <Main />
    </div>
  );
}

export default App;
