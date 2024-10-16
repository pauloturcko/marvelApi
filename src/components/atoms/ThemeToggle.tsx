import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from 'react-icons/fa'

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.5625rem;
  display: flex;
  align-items: center;
`;

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default DarkModeToggle