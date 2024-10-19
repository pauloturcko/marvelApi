import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = '14021ee103af4ea58264dbe84d18cce9';
const PRIVATE_KEY = '9870f0b597c5f424e8756148a4f94d6a4bc01293';
const BASE_URL = 'https://gateway.marvel.com/v1/public/';

const getHash = (timestamp: string): string => {
    return md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
};

type MarvelApiResponse = {
  data: {
    results: HeroApiResponse[];
  };
};

type HeroApiResponse = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  series: {
    available: number;
  };
  stories: {
    available: number;
  };
};

type HeroData = {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: number;
    series: number;
    stories: number;
  };
  

export const getMarvelData = async (endpoint: string, queryParams = ''): Promise<HeroData[]> => {
    try {
        const timestamp = new Date().getTime().toString();
        const hash = getHash(timestamp);

        const response = await axios.get<MarvelApiResponse>(
            `${BASE_URL}${endpoint}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}${queryParams}`
        );

        const filteredHeroes: HeroData[] = response.data.data.results.map((hero: HeroApiResponse) => ({
            id: hero.id,
            name: hero.name,
            thumbnail: {
              path: hero.thumbnail.path,
              extension: hero.thumbnail.extension
            },
            comics: hero.comics.available,
            series: hero.series.available,
            stories: hero.stories.available,
        }));
        

        return filteredHeroes;
    } catch (error) {
        console.error('Erro ao buscar dados da Marvel API: ', error);
        throw error;
    }
};
