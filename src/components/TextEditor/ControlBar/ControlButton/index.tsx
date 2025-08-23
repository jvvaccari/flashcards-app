import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";

const ControlButton = ({
  icon,
  onClick,
}: {
  icon: React.ReactElement;
  onClick: () => void;
}) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        background: `linear-gradient(to right, ${theme.brand[6]}, ${theme.brand[7]})`,
        borderRadius: 1,
        p: 1,
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#f6eccc",
      }}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};

export default ControlButton;
