import React, { useState } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faGrinBeam, faUser } from "@fortawesome/free-regular-svg-icons";
import "./Chat.css";
import Message from "./Message";
import Bot from "./Bot";

export default function Chat({ click, bot }) {
  const [messages, setMessages] = useState([]);
  const [current, setCurrent] = useState("");

  return (
    <Draggable handle="#handle" bounds="body">
      <div className="window">
        <div className="bar" id="handle">
          <div onClick={click} className="minimize">
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
        </div>

        <Message icon={faGrinBeam} message="Miten voin auttaa?" time='bot 16.5' />
        <Message icon={faUser} message="Haluan banaanin" />
        <Message icon={faGrinBeam} message="Nam!" />

        {messages}

        <div className="chat">
          <input
            placeholder="Kirjoita viesti tähän..."
            type="text"
            value={current}
            onChange={e => {
              setCurrent(e.target.value);
            }}
          />
          <button
            className="send"
            onClick={() => {
              setMessages([
                ...messages,
                <Message
                  icon={faUser}
                  message={current}
                  key={new Date().toISOString()}
                />,
                <Bot 
                  icon={faGrinBeam}
                  message={current}
                  key={new Date().toISOString()}
                />
              ]);
              setCurrent("");
            }}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </div>
      </div>
    </Draggable>
  );
}
