// App.tsx
import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/organisms/Header';
import HeroList from './components/molecules/HeroList';
import Loader from './components/atoms/Loader';
import { getMarvelData } from './api/marvelApi';
import { debounce } from 'lodash';
import { Hero } from './components/molecules/HeroCard';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isInitialMount = useRef(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fetchHeroesData = async (pageNumber: number) => {
    if (loading) return;
    setLoading(true);
    try {
      const newHeroes = await getMarvelData('characters', `&offset=${pageNumber * 20}&limit=20`);
      console.log('Retorno da API:', newHeroes);
      setHeroes((prevHeroes) => [...prevHeroes, ...newHeroes]);
      setHasMore(newHeroes.length > 0);
    } catch (error) {
      console.error('Erro ao buscar heróis: ', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= 
      document.documentElement.offsetHeight - 10 && 
      !loading && 
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, 200);

  const handleFavorite = (hero: Hero) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(hero);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    fetchHeroesData(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} setSearchTerm={setSearchTerm} />
      <HeroList heroes={filteredHeroes} onFavorite={handleFavorite} /> {}
      {loading && <Loader />}
      {!hasMore && <div>Todos os heróis foram carregados.</div>}
    </ThemeProvider>
  );
};

export default App;