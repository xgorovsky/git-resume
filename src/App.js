import React from "react";
import "./App.scss";
import ExoHeader from "./components/ExoHeader";
import ExoMain from "./components/ExoMain";

function App() {
  return (
    <div className="App">
      <ExoHeader />
      <ExoMain title="My Github Resumé" />
    </div>
  );
}

export default App;
