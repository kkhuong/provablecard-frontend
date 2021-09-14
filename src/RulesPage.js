import React, { Component } from "react";

import './RulesPage.css';


class RulesPage extends Component {
  render() {
    return (
      <div className="rules">
        <h1>Rules</h1>
        <p><b>On the specifics of the system:</b> The ProvableCard App operates with zero confirmations, meaning the time it takes for you to send a transaction and receive your winnings is near-instant. Card shuffles are evaluated as soon as the client picks up the broadcast. This is safe because it always builds the answering transaction with the output of your bet transaction. This means a blockchain that does not contain your bet cannot contain the site's answer.</p>
        <p>You place a bet by sending BTC, BCH, LTC, or ETH to the address listed. The ProvableCard App sees this, and starts a new Blackjack game by shuffling the deck and dealing the cards. If you win or push, your bet and any amount won is sent back.</p>

        <p><b>On the specifics of the game:</b> Each Blackjack game is plaed with one standard deck of 52 playing cards. Shuffling is done using the Yates-Fisher algorithm where the seed is the secret server hash append as a prefix to your transaction id (txid). The game then plays like how it normally would in a casino. Doubling After Split is allowed. You may split your hand (if both cards are the same rank) up to 4 times. Replitting Aces is allowed. You may not hit after splitting Aces, but you may double down. Late Surrender is offered. Because blockchain transaction id determines the deck order, decks are shuffled after each hand.</p>

        <h2>Delays</h2>
        <p>If there is a problem with the software there might be delays in processing bets or creating return transactions. A transaction will always be evaluated with the date of when it was first seen by the software. This means if your transaction comes in on the 1st, the software will tag the transaction with that date. Then if the transaction fails and the program explodes, and it's not fixed until the 2nd, your transaction will still use the 1st for the purpose of deck shuffling.</p>

        <h2>Problems</h2>
        <p>If you have any questions, please email support@provablecard.com</p>

        <h2>Min / Max Bets</h2>
        <p>If you send funds with less than the minimum amount, the transaction will be ignored. If you send more than the maximum bet, you will play the max bet and the rest will be ignored.</p>
      </div>
    );
  }
}

export default RulesPage;
