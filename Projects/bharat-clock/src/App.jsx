import Header from "./components/Header";
import Slogan from "./components/Slogan";
import TimeandDate from "./components/TimeandDate";

function App() {
  return (
    <>
      <center>
        {/* Heading Component */}
        <Header />
        {/* Slogan  Component */}
        <Slogan />
        {/* Time and Date Component */}
        <TimeandDate />
      </center>
    </>
  );
}

export default App;
