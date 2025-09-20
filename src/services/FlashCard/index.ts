import { FlashcardResume } from "../../interfaces/Flashcard/FlashcardResume";
import IApiClient from "../../interfaces/IApiClient";

export default class FlashCard {
       constructor(
        private api: IApiClient,
    ) {}

    public async getAll() {
        const response = await this.api.get('/flashcards');
        return response.data;
    }

    public async getById(id: string): Promise<FlashcardResume | null> {
        const response = await this.api.get(`/flashcards/${id}`);
        return response.data;
    }

    public async create(data: { question: string; answer: string }) {
        const response = await this.api.post('/flashcards', data);
        return response.data;
    }
}