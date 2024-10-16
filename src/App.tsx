import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/organisms/Header';
import HeroCard, { Hero } from './components/molecules/HeroCard';
import { getMarvelData } from './api/marvelApi';


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const data = await getMarvelData('characters', '&limit=20');
        setHeroes(data.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar heróis: ", error);
        setLoading(false)
      }
    };

    fetchHeroes();
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {loading ? (
        <p>Carregando Heróis...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", margin: '7.5rem 0' }}>
          {heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              imageUrl={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              heroName={hero.name}
            />
          ))}
        </div>
      ) }
    </ThemeProvider>
  );
};

export default App