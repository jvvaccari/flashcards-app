export interface CreateFlashcardDTO {
  question: string;
  answer: string;
  images: { url: string }[];
}
