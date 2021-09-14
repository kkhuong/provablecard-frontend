import React, { Component } from "react";

import './FairPage.css';


class FairPage extends Component {
  render() {
    return (
      <div className="fair">
        <h1>Provably Fair</h1>
        <p>In order to ensure that there is no way for the system to change the outcome of a bet, the secret keys used are decided ahead of time. They are not released right away, since they could be used to submit selective transactions and win bets unfairly. However, the hash of the secrets is released and forever recorded in the blockchain. After the secrets are release users can verify that preceeding bets were provably fair.</p>
        <p>Each bet transaction that comes in is assigned to the secret key of the current day when it is first processed. In most cases this will be as soon as the transaction is broadcast on the bitcoin network. However it could be later if the system has some problems processing or an outage. All times are in UTC-7.</p>

        [TABLE DISPLAYING A LIST OF SERVER SEED HASH AND THEIR PLAIN TEXTS]
      </div>
    );
  }
}

export default FairPage;
