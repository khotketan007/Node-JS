import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      {/* Importing Display component */}
      <Display></Display>
      {/* Button Container */}
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
