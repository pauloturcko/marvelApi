import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.5625rem;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  padding: ${({ isOpen }) => (isOpen ? '0.5rem' : '0')};
  margin-right: ${({ isOpen }) => (isOpen ? '0.5rem' : '0')};
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.alternativeColor};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 15px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchBarWrapper>
      <SearchButton onClick={() => setIsOpen(!isOpen)}>
        <FaSearch />
      </SearchButton>
      <SearchInput 
        type='text'
        placeholder='Buscar...'
        isOpen={isOpen}
        onChange={handleInputChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;