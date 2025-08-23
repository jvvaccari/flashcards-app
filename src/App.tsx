import "./App.css";
import Flashcard from "./components/Flashcard";
import front from "./assets/front.jpg";
import BackContent from "./components/Flashcard/BackContent";

function App() {
  return (
    <>
      <Flashcard
        front={front}
        children={<BackContent content="Back content goes here" />}
      />
    </>
  );
}

export default App;
