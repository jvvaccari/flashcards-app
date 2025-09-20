import { Box } from "@mui/material";
import RotatingCard from "../../components/RotatingCard";
import Content from "../../components/RotatingCard/Content";

const ShowCardPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212529",
        margin: 0,

        padding: 0,
        overflow: "hidden",
      }}
    >
      <RotatingCard
        children={{
          front: <Content content="Front content goes here" />,
          back: <Content content="Back content goes here" />,
        }}
      />
    </Box>
  );
};

export default ShowCardPage;
