import { Box, Text, useMantineTheme } from "@mantine/core";

const BackContent = ({ content }: { content: string }) => {
  const theme = useMantineTheme();
  return (
    <Box
      w="100%"
      h="100%"
      c="brand.9"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "24px",
        boxSizing: "border-box",
        backgroundColor: theme.colors.brand[1],
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        borderRadius: "25px",
        width: "100%",
        height: "100%",
      }}
    >
      <Text>{content}</Text>
    </Box>
  );
};

export default BackContent;
