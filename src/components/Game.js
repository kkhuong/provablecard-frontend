import React, { useState } from "react";
import PropTypes from 'prop-types';
import Hand from './Hand';
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import {
  Dialog,
  DialogActionsBar
} from "@progress/kendo-react-dialogs";

import './Game.css';


const Game = ({
  initialBet = 0.0,
  legalActions,
  dealerHand,
  playerHand,
  onAction,
  disabled = false
}) => {

  const [visibleDialog, setVisibleDialog] = useState(false);


  const toggleDialog = () => {
    console.log("DIALOG TOGGLE");
    setVisibleDialog(!visibleDialog);
  };

  const dialogAnswerYes = () => {
    console.log("DIALOG YES");
    toggleDialog();
  }

  const handIsInProgress = !disabled;

  const actionIsAvailable = (action) => {
    if (disabled) return false;
    if (action === 'p') return false; // remove this line later when split functionality is implemented
    return legalActions.includes(action);
  }

  return (
    <>
      {visibleDialog && (
        <Dialog title={"Insurance Bet"} onClose={toggleDialog}>
          <p
            style={{
              margin: "25px",
              textAlign: "center",
            }}
          >
            Need to be implemented!
          </p>
          <DialogActionsBar>
            <button className="k-button" onClick={dialogAnswerYes}>
              Confirm
            </button>
            <button className="k-button" onClick={toggleDialog}>
              Cancel
            </button>
          </DialogActionsBar>
        </Dialog>
      )}
      <div className="game">
        &nbsp;
        {dealerHand.length === 1 ? <Hand cards={[...dealerHand, 'brick']} /> : <Hand cards={dealerHand} />}
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
      <div style={{ height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <div>
          <div style={{ display: 'inline-block', marginRight: '20px' }}>
            <ButtonGroup>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('y')} primary={true} onClick={() => onAction('y', 0)}>Yes</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('n')} primary={true} onClick={() => onAction('n')}>No</Button></div>
            </ButtonGroup>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '20px' }}>
            <ButtonGroup>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('l')} primary={true} onClick={() => onAction('l')}>Surrender</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('p')} primary={true} onClick={() => onAction('p')}>Split</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('d')} primary={true} onClick={() => onAction('d', 0)}>Double</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('h')} primary={true} onClick={() => onAction('h')}>Hit</Button></div>
              <div style={{ margin: '2px' }}><Button disabled={!actionIsAvailable('s')} primary={true} onClick={() => onAction('s')}>Stand</Button></div>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

Game.propTypes = {
  initialBet: PropTypes.number,
  legalActions: PropTypes.array,
  dealerHand: PropTypes.array,
  playerHand: PropTypes.array,
  onAction: PropTypes.func,
  disabled: PropTypes.bool
};

export default Game;
