import React from 'react';
import styled from 'styled-components';
import { Bar } from './Bar';
import { Search } from '../search/Search';
import { useSearch } from '../hooks/useSearch';

import { BarsInterface } from '../interfaces'

export const Bars: React.FC<BarsInterface> = ({ bars }) => {
  const { filter, onSearch } = useSearch();

  const filteredbars = bars.filter(bar => bar.name.toLowerCase().indexOf(filter) !== -1);
  
  const barsList = filteredbars.map(bar => {
    return (
      <Bar
        key={bar.name}
        name={bar.name}
        district={bar.district}
        address={bar.address}
        time={bar.time}
        days={bar.days}
        website={bar.website}
      />
    );
  });

  return (
    <>
      <Search onSearch={onSearch} />
      <BarsWrapper>
        {barsList}
      </BarsWrapper>
    </>
  );
};

const BarsWrapper = styled.div`
  color: #E3DBD5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 5rem;
`;
