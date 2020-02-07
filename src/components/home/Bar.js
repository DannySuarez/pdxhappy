import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Bar = ({ name, district, address, time, days }) => {
  return (
    <BarWrapper>
      <Section>
        <h3>{name}</h3>
        <p>Location: {district}</p>
        <p>Address: {address}</p>
        <p>Happy Hour Days: {days}</p>
        <p>Happy Hour Times: {time}</p>
      </Section>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  box-shadow: 10px -10px 0 #681c16;
  display: grid;
  grid-template-rows: 1fr auto auto;
  border-radius: 5px;
`;

const Section = styled.section`
  padding: 2rem;
`;

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired
};
