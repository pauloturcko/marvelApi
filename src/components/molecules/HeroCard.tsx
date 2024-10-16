import React from "react";
import styled from "styled-components";

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
    align-items: center;
    background-color: transparent;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

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

interface CardProps {
    imageUrl: string;
    heroName: string;
}

const HeroCard: React.FC<CardProps> = ({ imageUrl, heroName }) => {
    return (
        <CardContainer style={{ gap: '10px' }}>
            <HeroImage src={imageUrl} alt={heroName} />
            <HeroButton>{heroName}</HeroButton>
        </CardContainer>
    );
};

export default HeroCard;