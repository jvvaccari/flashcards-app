import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BackContent = ({ content }: { content: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "24px",
        boxSizing: "border-box",
        backgroundColor: "#f6eccc",
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        borderRadius: "25px",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography
        onClick={(e) => {
          e.stopPropagation();
          console.log("Back content clicked");
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default BackContent;
