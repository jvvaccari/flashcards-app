import { Box, Text, useMantineTheme } from "@mantine/core";

const BackContent = ({ content }: { content: string }) => {
  const theme = useMantineTheme();
  return (
    <Box
      w="100%"
      h="100%"
      c="brand.9"
      bg={"brand.1"}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing.sm,
        boxSizing: "border-box",
      }}
    >
      <Text>{content}</Text>
    </Box>
  );
};

export default BackContent;
