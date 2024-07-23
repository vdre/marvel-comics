import 'dotenv/config'; 
import axios, { AxiosInstance } from "axios";
const {MARVEL_API_URL, API_KEY, HASH, TS} = process.env;

export class MarvelService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: MARVEL_API_URL,
            params: {
                apikey: API_KEY,
                ts: TS,
                hash: HASH
            }
        });
    }

    async getComics(limit: number = 10, offset: number = 0) {
        try {
            const response = await this.axiosInstance.get('/comics', {
                params: { limit, offset }
            });
            return response.data.data; 
        } catch (error) {
            throw error;
        }
    }
}