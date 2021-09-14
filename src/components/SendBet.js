import React, { Component } from "react";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import PropTypes from 'prop-types';

import './SendBet.css';


const SendBet = ({
  currency,
  address,
  disabled = false
}) => {

  const walletAddress = 'bitcoincash:qz9cq5r294syv3csh56e4jpyqrpt7gl9lcj7wveruw';

  return (
    <div className="send_bet">
      {!disabled && (
        <>
          <h1>Send {currency} to Play</h1>
          <div className="send_bet_qr">
            <img src={"assets/img/temp_qr.png"} alt="QR Code" />
          </div>
          <div className="send_bet_btn">
            <div style={{width: '240px', wordWrap: 'break-word', marginTop: '5px', fontWeight: 'bold', textAlign: 'center'}}>
              {walletAddress}
            </div>

            <div style={{ paddingTop: '20px' }}>
              <ButtonGroup width={'100%'}>
                <Button onClick={() => {navigator.clipboard.writeText(walletAddress)}}>COPY ADDRESS</Button>
              </ButtonGroup>
            </div>

            <div style={{ paddingTop: '20px' }}>
              <ButtonGroup width={'100%'}>
                <Button>OPEN IN {currency} WALLET</Button>
              </ButtonGroup>
            </div>

          </div>
        </>
      )}
      {disabled && (
        <>
          <h1>Hand in Progress</h1>
          <div className="send_bet_qr">

          </div>
          <div className="send_bet_btn">
            <Button>Copy Address {address}</Button>
          </div>

          <div className="send_bet_btn">
            <Button>Open in {currency} Wallet</Button>
          </div>
        </>
      )}
    </div>
  );
};

SendBet.propTypes = {
  currency: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default SendBet;
