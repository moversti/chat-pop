import React from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam } from '@fortawesome/free-regular-svg-icons'
import './Chat.css'
import { declareVariable } from "@babel/types";


export default function Chat({ click }) {
  return (
    <Draggable handle='#handle'>
      <div className="window">
        <div className="bar" id='handle'>
          <div onClick={click} className="minimize">
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-bubble">
            <div className="grin">
              <FontAwesomeIcon icon={faGrinBeam} size="2x" />
            </div>
            <div className="content">
              Bot: Lorem ipsum <br />
            </div>
            <div className="time-name">
              13:00 Chat-Pop Bot
        </div>
          </div>
        </div>
        <div className="chat">
          Kirjoita viesti tähän...
        <div className="send"></div>
        </div>
      </div>
    </Draggable>
  );
}
