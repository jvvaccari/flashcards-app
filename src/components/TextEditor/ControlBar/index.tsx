import { IconPhoto } from "@tabler/icons-react";
import ControlButton from "./ControlButton";
import { useMantineTheme } from "@mantine/core";

function ControlBar() {
  const theme = useMantineTheme();
  return (
    <div>
      <ControlButton icon={<IconPhoto size={theme.other.iconSize.sm} />} />
    </div>
  );
}

export default ControlBar;
