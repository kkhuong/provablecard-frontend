import React from "react";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import PropTypes from 'prop-types';

import './SendBet.css';


const SendBet = ({
  onSubmit,
  disabled=false
}) => {

  const walletAddress = 'bitcoincash:qz9cq5r294syv3csh56e4jpyqrpt7gl9lcj7wveruw';

  const randomInteger = () => {
    return Math.floor(Math.random() * 9999999999) + 1;
  }

  return (
    <div className="send_bet">
      {!disabled && (
        <>
          <h1>Send BTC to Play</h1>
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
                {/* <Button>OPEN IN BTC WALLET</Button> */}
                <Button onClick={() => onSubmit("BTC", 100, "pretend_it_is_valid", randomInteger())}>PLACE BET (100)</Button>
              </ButtonGroup>
            </div>

          </div>
        </>
      )}
      {disabled && (
        <>
          <h1>Hand in Progress</h1>
          <div className="send_bet_qr">
            <img src={"assets/img/empty_qr.png"} alt="QR Code" />
          </div>
          <div className="send_bet_btn">
            <div style={{width: '240px', wordWrap: 'break-word', marginTop: '5px', fontWeight: 'bold', textAlign: 'center'}}>
              Please play your hand (see left).
            </div>

            <div style={{ paddingTop: '20px' }}>
              <ButtonGroup width={'100%'}>
                <Button disabled>COPY ADDRESS</Button>
              </ButtonGroup>
            </div>

            <div style={{ paddingTop: '20px' }}>
              <ButtonGroup width={'100%'}>
                <Button disabled>OPEN IN BTC WALLET</Button>
              </ButtonGroup>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

SendBet.propTypes = {
  disabled: PropTypes.bool
};

export default SendBet;
