import React, { ChangeEvent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface ISearchProps {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<ISearchProps> = ({ onSearch }) => {
  return (
    <Cover>
      <Input onChange={onSearch} placeholder="Search by Name" type="text" />
    </Cover>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const Cover = styled.div`
  input[type="text"] {
    outline: none;
    width: 100%;
    font-size: 2rem;
    line-height: 1;
  }
  padding-left: 35px;
  background-color: #7f9497;
  border-radius: 5px;
  box-shadow: 5px 10px 50px #37474a, 0 0 0 2px #37474a;
`;

const Input = styled.input`
  color: #37474a;
  border: 0;
  background-color: transparent;
`;
