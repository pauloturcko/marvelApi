import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/organisms/Header';
import HeroList from './components/molecules/HeroList';
import Loader from './components/atoms/Loader';
import { fetchHeroes } from './services/heroService';
import { debounce } from 'lodash';
import { Hero } from './components/molecules/HeroCard';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fetchHeroesData = async (pageNumber: number) => {
    setLoading(true);
    try {
      const newHeroes = await fetchHeroes(pageNumber);
      setHeroes((prevHeroes) => [...prevHeroes, ...newHeroes]);
      setHasMore(newHeroes.length > 0);
    } catch (error) {
      console.error('Erro ao buscar heróis: ', error);
    }
    setLoading(false);
  };

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

  useEffect(() => {
    fetchHeroesData(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroList heroes={heroes} />
      {loading && <Loader />}
      {!hasMore && <div>Todos os heróis foram carregados.</div>}
    </ThemeProvider>
  );
};

export default App;