import { Box, Stack, useMantineTheme } from "@mantine/core";
import ControlBar from "./ControlBar";

const TextEditor = () => {
  const theme = useMantineTheme();

  return (
    <Stack>
      <ControlBar />
      <Box
        c="brand.9"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          boxSizing: "border-box",
          backgroundColor: theme.colors.brand[1],
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
