import React, { Component } from "react";
import './InstructionsPage.css';

class InstructionsPage extends Component {
  render() {
    return (
      <div className="instructions">
        <h1>Instructions</h1>

        <h2>1. How can I play?</h2>
        <p>All you have to do is send BTC, BCH, LTC, or ETH to the addresses listed (either by scanning the QR Code or by typing out the address into your wallet). Your winnings will automatically be sent back to the address you sent the funds from! No registration of any kind is required.</p>

        <h2>2. How can I get a Bitcoin or a Bitcoin Cash Wallet?</h2>
        <p>There are several choices, but we recommend the Bitcoin.com wallet.</p>

        <h2>3. How do I play Blackjack?</h2>
        <p>You will be dealt 2 cards and will play Blackjack how you normally would in a casino. On any two cards (except a natural Blackjack, or if the dealer has a natural), you may <b>surrender</b>, <b>double</b>, <b>hit</b>, or <b>stand</b>.</p>
        <p>The game ends when all of your hands are ended. A hand ends when it is busted, or if the player has choose to double down or stand. If the player or the dealer has a natural Blackjack, the game ends immediately and payout is handled accordingly.</p>
        <p>If the dealer shows an Ace, insurance will be offered. Please press 'Yes' or 'No' and then proceed with the hand. You may only send up to half of the original bet for your insurance bet. The insurance bet pays 2:1 on the bet if the dealer has a natural Blackjack.</p>
      </div>
    );
  }
}

export default InstructionsPage;
