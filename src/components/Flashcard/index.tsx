import { Box } from "@mantine/core";
import React, { useState } from "react";

const Flashcard = ({ front, back }: { front: string; back: string }) => {
  const [flipped, setFlipped] = useState(false);

  const cardStyle = {
    backgroundColor: "transparent",
    width: 300,
    height: 450,
    perspective: 1000,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const innerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 1s",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(-180deg)" : "none",
  };

  const sideStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: 25,
    overflow: "hidden",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 25,
    display: "block",
  };

  return (
    <Box style={cardStyle} onClick={() => setFlipped((f) => !f)}>
      <Box style={innerStyle}>
        <Box style={sideStyle}>
          <img src={front} alt="Front" style={imgStyle} />
        </Box>
        <Box
          style={{
            ...sideStyle,
            transform: "rotateY(-180deg)",
          }}
        >
          <Box component="img" src={back} alt="Back" style={imgStyle} />
        </Box>
      </Box>
    </Box>
  );
};

export default Flashcard;
