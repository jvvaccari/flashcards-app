import { Button, useMantineTheme } from "@mantine/core";

const ControlButton = ({ icon }: { icon: React.ReactElement }) => {
  const theme = useMantineTheme();

  return (
    <Button
      leftSection={
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </span>
      }
      variant="gradient"
      style={{
        backgroundImage: `linear-gradient(to right, ${theme.colors.brand[6]}, ${theme.colors.brand[7]})`,
        borderRadius: theme.radius.sm,

        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      c={theme.colors.brand[1]}
    />
  );
};

export default ControlButton;
