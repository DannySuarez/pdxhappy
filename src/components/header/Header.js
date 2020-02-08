import React from "react";
// import "./styles.css";
import styled from "styled-components";

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
  background-color: #FFC600;

  h1 {
   @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
  }
  font-size: 1.5rem;
`;
