import React from "react";
import PropTypes from "prop-types";
import { Bar } from "./Bar";

const Bars = ({ bars }) => {
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
  return <div>{barsList}</div>;
};

Bars.propTypes = {
  bars: PropTypes.object.isRequired
};

export default Bars;
