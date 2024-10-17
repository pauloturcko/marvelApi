import { getMarvelData } from '../api/marvelApi';
import { Hero } from '../components/molecules/HeroCard';

export const fetchHeroes = async (pageNumber: number): Promise<Hero[]> => {
  const limit = 20;
  const offset = pageNumber * limit;
  const data = await getMarvelData('characters', `&limit=${limit}&offset=${offset}`);

  return data.data.results.map((hero: Hero) => ({
    id: hero.id,
    name: hero.name,
    thumbnail: hero.thumbnail,
  }));
};
