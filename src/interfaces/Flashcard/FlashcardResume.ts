export interface FlashcardResume {
  id: string;
  question: string;
  answer: string;
  images: { url: string; key: string }[];
}
