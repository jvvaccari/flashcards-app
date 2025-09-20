import { Box } from "@mui/material";
import RotatingCard from "../../components/RotatingCard";
import Content from "../../components/RotatingCard/Content";
import { useEffect, useState } from "react";
import { flashCardService } from "../../services";
import { FlashcardResume } from "../../interfaces/Flashcard/FlashcardResume";

const ShowCardPage = () => {
  const [flashCard, setFlashCard] = useState<FlashcardResume | null>(null);

  useEffect(() => {
    const fetchFlashCard = async () => {
      try {
        const data = await flashCardService.getById("68cef5b4717a79c30df2521b");
        setFlashCard(data);
      } catch (error) {
        console.error("Erro ao buscar flashcard:", error);
      }
    };
    fetchFlashCard();
  }, []);

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
          front: (
            <Content
              content={flashCard?.question || "Front content goes here"}
            />
          ),
          back: (
            <Content content={flashCard?.answer || "Back content goes here"} />
          ),
        }}
      />
    </Box>
  );
};

export default ShowCardPage;
