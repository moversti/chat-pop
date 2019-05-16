import React from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam } from '@fortawesome/free-regular-svg-icons'
import './Chat.css'
import Message from './Message'

export default function Chat({ click }) {
  return (
    <Draggable handle='#handle' bounds='body'>
      <div className="window">
        <div className="bar" id='handle'>
          <div onClick={click} className="minimize">
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
        </div>
        <Message icon={faGrinBeam} message='Miten voin auttaa?' />
        You: Lorem ipsum <br /> Bot: Lorem ipsum <br /> You: Lorem ipsum <br /> Bot: Lorem ipsum
        <div className="chat">
        Kirjoita viesti tähän...
        <div className="send"></div>
        </div>
      </div>
    </Draggable>
  );
}
