import React from "react";
import PropTypes from "prop-types";

export const Bar = ({ name, district, address, time, days }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Location: {district}</p>
      <p>Address: {address}</p>
      <p>Happy Hour Days: {days}</p>
      <p>Happy Hour Times: {time}</p>
    </div>
  );
};

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired
};
