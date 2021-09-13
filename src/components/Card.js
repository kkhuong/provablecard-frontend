import React from "react";
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({
  string
}) => {
  return (
    <div style={{width: '40px'}}>
      <img src={"/assets/img/" + string + '.svg'} alt={string} width='40px' />
    </div>
  );
};

Card.propTypes = {
  string: PropTypes.string.isRequired
};

export default Card;
