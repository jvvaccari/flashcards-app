import "./App.css";
import Flashcard from "./components/Flashcard";
import front from "./assets/front.jpg";
import back from "./assets/back.jpg";

function App() {
  return (
    <>
      <Flashcard front={front} back={back} />
    </>
  );
}

export default App;
