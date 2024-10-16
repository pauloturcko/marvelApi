import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = '14021ee103af4ea58264dbe84d18cce9';
const PRIVATE_KEY = '9870f0b597c5f424e8756148a4f94d6a4bc01293';
const BASE_URL = 'https://gateway.marvel.com/v1/public/';

const getHash = (timestamp: string): string => {
    return md5(timestamp + PRIVATE_KEY + PUBLIC_KEY)
}

export const getMarvelData = async (endpoint: string, queryParams = '') => {
    try {
        const timestamp = new Date().getTime().toString();
        const hash = getHash(timestamp);

        const response = await axios.get(
            `${BASE_URL}${endpoint}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}${queryParams}`
        );

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da Marvel API: ', error);
        throw error;
    };
}