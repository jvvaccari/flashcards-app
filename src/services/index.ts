import { FlashCardsApiClient } from "../classes/FlashCardsApiClient";
import FlashCard from "./FlashCard";

const apiClient = new FlashCardsApiClient();

export const flashCardService = new FlashCard(apiClient);