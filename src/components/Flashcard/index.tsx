import { Box } from "@mantine/core";
import React, { useState } from "react";

const Flashcard = ({
  front,
  children,
}: {
  front: string;
  children: React.ReactNode;
}) => {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cardStyle = {
    backgroundColor: "transparent",
    width: 525,
    height: 787.5,
    perspective: 1000,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    willChange: "transform",
    transition: "box-shadow 0.2s",
  };

  const innerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.3s cubic-bezier(.23,1,.32,1)",
    transformStyle: "preserve-3d",
    backgroundColor: "transparent",
    transform: `rotateY(${flipped ? -180 : 0}deg) rotateX(${
      tilt.y
    }deg) rotateY(${tilt.x}deg)`,
  };

  const sideStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "transparent",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 25,
    display: "block",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 12;
    const tiltX = ((x - centerX) / centerX) * maxTilt;
    const tiltY = -((y - centerY) / centerY) * maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Box
      style={cardStyle}
      onClick={() => setFlipped((f) => !f)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Flashcard;
