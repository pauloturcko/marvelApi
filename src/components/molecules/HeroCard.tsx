// HeroCard.tsx
import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

export interface Hero {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const CardContainer = styled.div`
  width: 260px;
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 346px;
  object-fit: cover;
`;

const HeroButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textColor02};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

const FavoriteIcon = styled(FaHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

interface CardProps {
  imageUrl: string;
  heroName: string;
  onFavorite: () => void;
}

const HeroCard: React.FC<CardProps> = ({ imageUrl, heroName, onFavorite }) => {
  return (
    <CardContainer style={{ gap: '10px' }}>
      <FavoriteIcon onClick={onFavorite} />
      <HeroImage src={imageUrl} alt={heroName} />
      <HeroButton>{heroName}</HeroButton>
    </CardContainer>
  );
};

export default HeroCard;