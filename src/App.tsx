import "./App.css";
import Box from "@mui/material/Box";
// import CreatePage from "./pages/Flashcard/CreatePage";

import Flashcard from "./components/Flashcard";
import Content from "./components/Flashcard/Content";

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
        overflow: "hidden",
      }}
    >
      <Flashcard
        children={{
          front: <Content content="Front content goes here" />,
          back: <Content content="Back content goes here" />,
        }}
      />
      {/* <CreatePage /> */}
    </Box>
  );
}

export default App;
