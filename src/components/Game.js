import React from "react";
import PropTypes from 'prop-types';
import Hand from './Hand';
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";

import './Game.css';

const Game = ({
  currency,
  address,
  disabled = false
}) => {

  const dealerHand = ['As', 'Kd'];
  const playerHand = ['3c', '8h'];
  const handIsInProgress = false;
  const legalActions = ['l', 'd', 'h', 's'];


  const actionIsAvailable = (action, legalActions) => {
    return legalActions.includes(action);
  }

  return (
    <>
      <div className="game">
        &nbsp;
        <Hand cards={dealerHand} />
        <div style={{ height: '200px', marginTop: '40px' }}>
          <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px', color: 'rgba(130, 134, 142, 1)' }}>
            <p>Blackjack Pays 3:2</p>
            <p>Dealer Must Hit Soft 17</p>
            <p>Insurance Pays 2:1</p>
          </div>
          {!handIsInProgress && (
            <div style={{ marginTop: '60px', width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px', color: 'rgba(130, 134, 142, 1)' }}>
              <p>[send in your bet to get dealt a hand]</p>
            </div>
          )}
        </div>

        <div style={{ position: 'absolute', bottom: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Hand cards={playerHand} />
        </div>
      </div>
      <div style={{ height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div>
          <div style={{ display: 'inline-block', marginRight: '20px' }}>
            <ButtonGroup>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('y', legalActions)} primary={true}>Yes</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('n', legalActions)} primary={true}>No</Button></div>
            </ButtonGroup>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '20px' }}>
            <ButtonGroup>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('l', legalActions)} primary={true}>Surrender</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('p', legalActions)} primary={true}>Split</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('d', legalActions)} primary={true}>Double</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('h', legalActions)} primary={true}>Hit</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('s', legalActions)} primary={true}>Stand</Button></div>
            </ButtonGroup>
          </div>
        </div>
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
