import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Bar = ({ name, district, address, time, days, website }) => {

  const linkToWebsite = website ? 
    <a href={website}> <h3>{name}</h3> </a>
    : <h3>{name}</h3>;

  return (
    <BarWrapper>
      <Section>
        {linkToWebsite}
        <p>Location: {district}</p>
        <p>Address: {address}</p>
        <p>Happy Hour: {days}</p>
        <p>Happy Hour Times: {time}</p>
      </Section>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  box-shadow: 10px -10px 0 #37474a;
  display: grid;
  grid-template-rows: 1fr auto auto;
  border-radius: 5px;
  border: 1px solid #d7d7d7;
`;

const Section = styled.section`
  padding: 2rem;
  h3 {
    color: #37474a;
  }
`;

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  website: PropTypes.string
};
