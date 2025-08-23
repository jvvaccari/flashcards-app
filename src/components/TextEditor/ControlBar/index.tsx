import { Stack, useTheme } from "@mui/material";

import ControlButton from "./ControlButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import ImageIcon from "@mui/icons-material/Image";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

// Alignment

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

function ControlBar({
  handleBold,
  handleItalic,
  handleClear,
  handleAlignLeft,
  handleAlignCenter,
  handleAlignRight,
  handleTextIncrease,
  handleTextDecrease,
  handleUploadClick,
  handleSaveContent,
}: {
  handleBold: () => void;
  handleItalic: () => void;
  handleClear: () => void;
  handleAlignLeft: () => void;
  handleAlignCenter: () => void;
  handleAlignRight: () => void;
  handleTextIncrease: () => void;
  handleTextDecrease: () => void;
  handleUploadClick: () => void;
  handleSaveContent: () => void;
}) {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      spacing={4}
      sx={{
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        width: "100vw",
        py: 1,
      }}
    >
      <ControlButton onClick={handleBold} icon={<FormatBoldIcon />} />
      <ControlButton onClick={handleItalic} icon={<FormatItalicIcon />} />
      <ControlButton onClick={handleClear} icon={<ClearAllIcon />} />
      <Stack direction={"row"} spacing={1}>
        <ControlButton
          onClick={handleAlignLeft}
          icon={<FormatAlignLeftIcon />}
        />
        <ControlButton
          onClick={handleAlignCenter}
          icon={<FormatAlignJustifyIcon />}
        />
        <ControlButton
          onClick={handleAlignRight}
          icon={<FormatAlignRightIcon />}
        />
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <ControlButton
          onClick={handleTextIncrease}
          icon={<TextIncreaseIcon />}
        />
        <ControlButton
          onClick={handleTextDecrease}
          icon={<TextDecreaseIcon />}
        />
        <ControlButton icon={<ImageIcon />} onClick={handleUploadClick} />
        <ControlButton onClick={handleSaveContent} icon={<SaveAltIcon />} />
      </Stack>
    </Stack>
  );
}

export default ControlBar;
