import React from "react";
import PropTypes from 'prop-types';
import Hand from './Hand';

import './Game.css';

const Game = ({
  currency,
  address,
  disabled = false
}) => {
  return (
    <>
      <div className="game">
        Game Box
        <Hand cards={['As', '2d', '6h']} />
      </div>
      <div style={{height: '50px', background: 'blue'}}>
        Actions
      </div>
    </>
  );
};

Game.propTypes = {
  currency: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Game;
