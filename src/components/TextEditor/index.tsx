import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ControlBar from "./ControlBar";

const TextEditor = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <ControlBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          boxSizing: "border-box",
          backgroundColor: "#f6eccc",
          backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
          backgroundSize: "20px 20px",
          width: "100%",
          height: "100%",
        }}
      />
    </Stack>
  );
};

export default TextEditor;
