import React from "react";
import styled from "styled-components";

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
    width: 90%;
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
  width: 90%;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }
`;

interface CardProps {
    imageUrl: string;
    heroName: string;
}

const HeroCard: React.FC<CardProps> = ({ imageUrl, heroName }) => {
    return (
        <CardContainer>
            <HeroImage src={imageUrl} alt={heroName} />
            <HeroButton>{heroName}</HeroButton>
        </CardContainer>
    );
};

export default HeroCard;