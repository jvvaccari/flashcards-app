import { IconPhoto } from "@tabler/icons-react";
import ControlButton from "./ControlButton";

function ControlBar() {
  return (
    <div>
      <ControlButton icon={<IconPhoto size={12} />} />
    </div>
  );
}

export default ControlBar;
