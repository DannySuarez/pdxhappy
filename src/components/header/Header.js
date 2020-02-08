import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <h1>PDX Happy Hour</h1>
        <p>A List of Portland Bars with Happy Hours</p>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.header`
  text-align: center;
  font-size: 1.5rem;
  color: #e3dbd5;
  h1 {
    @import url("https://fonts.googleapis.com/css?family=Pacifico|Fira+Mono&display=swap");
    font-family: "Pacifico", cursive;
    font-size: 2rem;
    color: #37474a;
  }
  p {
    font-family: "Fira Mono", monospace;
  }
`;
