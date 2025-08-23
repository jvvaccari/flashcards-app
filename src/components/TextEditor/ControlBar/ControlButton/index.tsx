import Button from "@mui/material/Button";

const ControlButton = ({ icon }: { icon: React.ReactElement }) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "linear-gradient(to right, #2b3238, #212922)",
        borderRadius: 1,
        p: 1,
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#f6eccc",
      }}
    >
      {icon}
    </Button>
  );
};

export default ControlButton;
