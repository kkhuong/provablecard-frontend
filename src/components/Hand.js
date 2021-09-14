import React from "react";
import PropTypes from 'prop-types';
import Card from './Card';

import './Hand.css';


const Hand = ({
  cards
}) => {
  return (
    <div style={{ display: 'flex', margin: 'auto' }} className='Hand'>

        {cards.map((card, index) => {
          return <Card string={card} key={index} />
        })}

    </div>
  );
};

Hand.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Hand;
