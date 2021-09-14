import React, { Component } from "react";
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
import SendBet from './components/SendBet';
import Game from './components/Game';
// import Home from "./Home";
// import Rules from "./Rules";
// import Fair from "./Fair";

import './AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>ProvableCard is a single page application that lets users play Blackjack with real money. Users will place bets by sending cryptocurrency to a wallet address displayed on the webpage. Once the user has placed a bet, the game will play out how it normally would in a live casino. Payouts for winning hands are then sent back to the player's wallet (from the wallet they sent their bet in with).</p>
        <p>We founded ProvableCard because there is a lack of online casinos that offer a way for players to verify that their games are fair. Furthermore, other online casinos require signup and deposits, which can be lost or stolen. With ProvableCard, this is not something you need to worry about because payouts are instant... and no deposit is required.</p>
        <p>We believe in transparency, which is why we open-sourced the software that ProvableCard is powered on.</p>

        <h2>Team Members</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 240, height: 240, display: 'inline-block' }}><img src="/assets/img/kkhuong.png" alt="Kevin Khuong" /></div>
          <div style={{ width: '100%', display: 'inline-block', marginLeft: 15 }}><p>Kevin Khuong is the founder of ProvableCard. He has worked on researching Blackjack extensively, especially on variant Blackjack games such as Free Bet Blackjack and Blackjack Switch. Previously, he was a software engineer at American Express, and has a BS in Mathematics and Computer Science from the UC San Diego.</p><p>Currently, he is working on both the frontend and the backend for ProvableCard.</p></div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
