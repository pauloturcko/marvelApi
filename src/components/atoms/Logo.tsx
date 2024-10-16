import React from "react";
import styled from "styled-components";

const LogoText = styled.a`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
`;

const Logo: React.FC = () => {
  return <LogoText href="#">universo<br/>marvel_</LogoText>;
};

export default Logo;
