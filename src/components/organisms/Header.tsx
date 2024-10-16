import React from "react";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import LikedHeroes from "../atoms/likedHeroes";
import DarkModeToggle from "../atoms/ThemeToggle";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Logo />
      <IconsWrapper>
        <SearchBar />
        <LikedHeroes />
        <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </IconsWrapper>
    </HeaderWrapper>
  );
};

export default Header;