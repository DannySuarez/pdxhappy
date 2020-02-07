import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Bar } from "./Bar";

export const Bars = ({ bars }) => {
  const barsList = bars.map(bar => {
    return (
      <Bar
        key={bar.name}
        name={bar.name}
        district={bar.district}
        address={bar.address}
        time={bar.time}
        days={bar.days}
      />
    );
  });

  return <BarsWrapper>{barsList}</BarsWrapper>;
};

Bars.propTypes = {
  bars: PropTypes.array.isRequired
};

const BarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 5rem;
`;
