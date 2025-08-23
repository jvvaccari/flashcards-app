import ClearIcon from "@mui/icons-material/Clear";
import ControlButton from "./ControlButton";
import Box from "@mui/material/Box";
import ControlButtonGrid from "./ControlButtonGrid";

function ControlBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0faff",
        width: "100vw",
        py: 1,
      }}
    >
      <ControlButtonGrid
        buttons={[
          <ControlButton icon={<ClearIcon />} />,
          <ControlButton icon={<ClearIcon />} />,
          <ControlButton icon={<ClearIcon />} />,
          <ControlButton icon={<ClearIcon />} />,
        ]}
      />
    </Box>
  );
}

export default ControlBar;
