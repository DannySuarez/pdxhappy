import React from 'react';
import { Header } from '../components/header/Header';
import { BarApp } from './home/BarApp';
import { Footer } from './footer/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <BarApp />
        <Footer />
      </Main>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html {
    background: #7f9497
    };
`;

const Main = styled.main`
  display: grid;
  grid-gap: 3rem;
  max-width: 1900px;
  padding: 0 1.5rem;
  margin: 2rem auto;
`;
