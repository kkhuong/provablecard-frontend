import React, { useState } from "react";
import SendBet from './components/SendBet';
import Game from './components/Game';

import './Main.css';


const Main = () => {

  const [gameIsActive, setGameIsActive] = useState(false);
  const [handId, setHandId] = useState(0);
  const [actionList, setActionList] = useState([]);
  const [dealerHandCards, setDealerHandCards] = useState([]);
  const [playerHandCards, setPlayerHandCards] = useState([]);

  const saveAPIResponseToStates = (res) => {
    setHandId(res['id']);
    setGameIsActive(!res['done']);
    setActionList(res["action_set"]);
    setDealerHandCards(res["dealer_hand"]);

    const playerHandObject = res["subhands"][0]; // just for now
    setPlayerHandCards(playerHandObject["cards"]);
  }

  const placeBetAndStartGame = (currency, amount, address, txid) => {
    console.log("CLICKED PLAY: ", currency, amount, address, txid);

    const requestBody = {
      currency: currency,
      address: address,
      bet: amount,
      txid: txid
    };
    console.log("CREATING A NEW HAND", requestBody);
    fetch(
      'http://localhost:8000/api/hand',
      {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      return response.json();
    }).then(res => {
      saveAPIResponseToStates(res);
    }).catch(error => console.log("ERROR: ", error));
  }

  const handleBJAction = (action, amount = 0) => {
    // see if action is valid
    if (!actionList.includes(action)) {
      throw new Error("Action " + action + " is invalid for hand #" + handId);
    }

    const requestBody = {
      action: action,
      amount: 0
    };
    fetch(
      'http://localhost:8000/api/hand/' + handId,
      {
        method: 'PUT',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      return response.json();
    }).then(res => {
      saveAPIResponseToStates(res);
      if (res['done'] && res['amount_won'] > 0) {
        console.log("BROADCAST. ", res['amount_won'], "has been sent to wallet", res['address']);
      }
    }).catch(error => console.log("ERROR: ", error));
  }

  return (
    <div style={{ width: '100%', display: 'table' }}>
      <div style={{ display: 'table-row' }}>
        <div style={{ minWidth: '480px', width: '80%', display: 'table-cell' }} className="trbox"><Game legalActions={actionList} dealerHand={dealerHandCards} playerHand={playerHandCards} onAction={handleBJAction} disabled={!gameIsActive} /></div>
        <div style={{ minWidth: '20px', width: '5%', display: 'table-cell' }} ></div>
        <div style={{ width: '15%', display: 'table-cell' }} className="trbox"><SendBet onSubmit={placeBetAndStartGame} disabled={gameIsActive} /></div>
      </div>
    </div>
  );
}

export default Main;
