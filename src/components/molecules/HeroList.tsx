// HeroList.tsx
import React from 'react';
import HeroCard, { Hero } from './HeroCard';

interface HeroListProps {
  heroes: Hero[];
  onFavorite: (hero: Hero) => void;
}

const HeroList: React.FC<HeroListProps> = ({ heroes, onFavorite }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between", margin: '7.5rem 150px' }}>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          imageUrl={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          heroName={hero.name}
          onFavorite={() => onFavorite(hero)}
        />
      ))}
    </div>
  );
};

export default HeroList;
