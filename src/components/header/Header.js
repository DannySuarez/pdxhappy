import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import twitterCard from '../../../static/twitter.png';

export const Header = () => {
  const WEBSITE = 'https://pdxhappystaging.netlify.com';

  return (
    <>
      <HeaderWrapper>
        <Helmet>
          <html lang="en" amp />
          <title>PDX Happy Hour</title>
          <meta name="description" content="A List of Portland Bars with Happy Hours" />
          <link rel="canonical" href="https://pdxhappystaging.netlify.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@dannysuarezpdx" />
          <meta name="twitter:title" content="PDX Happy Hour" />
          <meta name="twitter:description" content="A List of Portland Bars with Happy Hours" />
          <meta name="twitter:image" content={`${WEBSITE}${twitterCard}`} />
        </Helmet>
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
