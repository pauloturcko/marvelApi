import React from "react";
import styled from "styled-components";
import { FaHeart } from 'react-icons/fa'

const HeartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.5625rem;
  display: flex;
  align-items: center;
`;

const LikedHeroes: React.FC = () => {
  return (
    <HeartButton>
      <FaHeart />
    </HeartButton>
  );
};

export default LikedHeroes;