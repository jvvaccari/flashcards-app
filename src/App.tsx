import { Container, useMantineTheme } from "@mantine/core";
import "./App.css";
// import Flashcard from "./components/Flashcard";
// import front from "./assets/front.jpg";
// import BackContent from "./components/Flashcard/BackContent";
import TextEditor from "./components/TextEditor";

function App() {
  const theme = useMantineTheme();
  return (
    <Container
      size="xl"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.brand[8],
      }}
    >
      {/* <Flashcard
        front={front}
        children={<BackContent content="Back content goes here" />}
      /> */}
      <TextEditor />
    </Container>
  );
}

export default App;
