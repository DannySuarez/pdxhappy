import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <Center>
      <center>
        <p>
          Made by <a href="https://dannycodes.io">Danny Suarez</a> with{' '}
          <a href="https://reactjs.org/">React</a> © {new Date().getFullYear()}
        </p>
        <p>
          Source on <a href="https://github.com/DannySuarez/pdxhappy">GitHub</a>.
        </p>
      </center>
    </Center>
  );
};

const Center = styled.div`
  a {
    color: #E3DBD5;
    text-decoration-color: var(--pink);
    font-style: italic;
  }
`;
