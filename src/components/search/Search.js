import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Search = ({ onSearch }) => {
  return (
    <Cover>
      <Input onChange={onSearch} placeholder="Search by Name" type="text" />
    </Cover>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

const Cover = styled.div` 
  input[type="text"]
  {
    outline: none;
    width: 100%;
    font-size: 2rem;
    line-height: 1;
  }
  padding-left: 35px;
  background-color: #7F9497;
  border-radius: 5px;
  box-shadow: 5px 10px 50px #37474A, 0 0 0 2px #37474A;
`;

const Input = styled.input`
  color: #37474A;
  border: 0;
  background-color: transparent;
`;
