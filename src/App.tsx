import Box from "@mui/material/Box";
import "./App.css";
// import Flashcard from "./components/Flashcard";
// import front from "./assets/front.jpg";
// import BackContent from "./components/Flashcard/BackContent";

import TextEditor from "./components/TextEditor";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212529",
        margin: 0,
        padding: 0,
        // overflow: "hidden",
      }}
    >
      {/* <Flashcard
        front={front}
        children={<BackContent content="Back content goes here" />}
      /> */}
      <TextEditor />
    </Box>
  );
}

export default App;
