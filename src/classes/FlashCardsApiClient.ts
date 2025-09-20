import { ApiClient } from "./ApiClient";

export class FlashCardsApiClient extends ApiClient {
    constructor() {
        super({
            baseURL: `${import.meta.env.VITE_API_URL}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
    }
}
