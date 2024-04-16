import React from "react";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import TimeandDate from "./components/TimeandDate";

function App() {
  return (
    // Frgamentation
    <React.Fragment>
      <center>
        {/* Heading Component */}
        <Header />
        {/* Slogan  Component */}
        <Slogan />
        {/* Time and Date Component */}
        <TimeandDate />
      </center>
    </React.Fragment>
  );
}

export default App;
