import React, { Component } from "react";
import { Button } from "@progress/kendo-react-buttons";
import PropTypes from 'prop-types';

import './SendBet.css';

const SendBet = ({
  currency,
  address,
  disabled = false
}) => {
  return (
    <div className="send_bet">
      {!disabled && (
        <>
          <h1>Send {currency} to Play</h1>
          <div className="send_bet_qr">
            <img src={"assets/img/temp_qr.png"} alt="QR Code" />
          </div>
          <div className="send_bet_btn">
            <Button>Copy Address {address}</Button>
          </div>

          <div className="send_bet_btn">
            <Button>Open in {currency} Wallet</Button>
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
