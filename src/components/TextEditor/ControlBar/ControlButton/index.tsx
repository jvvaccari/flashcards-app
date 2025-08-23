import { Button, useMantineTheme } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";

const ControlButton = () => {
  const theme = useMantineTheme();
  return (
    <Button
      leftSection={<IconPhoto size={16} style={{ paddingTop: 2 }} />}
      variant="gradient"
      style={{
        backgroundImage: `linear-gradient(to right, ${theme.colors.brand[6]}, ${theme.colors.brand[7]})`,
        borderRadius: theme.radius.sm,
      }}
      c={theme.colors.brand[1]}
    />
  );
};

export default ControlButton;
