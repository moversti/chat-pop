import React from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam } from '@fortawesome/free-regular-svg-icons'
import './Chat.css'


export default function Chat({ click }) {
  return (
    <Draggable>
      <div className="window">
        <div className="bar">
          <div onClick={click} className="minimize">
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
        </div>
        <div className="chat-bubble">
        
        <FontAwesomeIcon icon={faGrinBeam} size="2x" />

        Bot: Lorem ipsum <br />
        </div>
        You: Lorem ipsum <br /> Bot: Lorem ipsum <br /> You: Lorem ipsum <br /> Bot: Lorem ipsum
        <div className="chat">
        Kirjoita viesti tähän...
        <div className="send"></div>
        </div>
      </div>
    </Draggable>
  );
}
