import React, { useState } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faGrinBeam, faUser } from "@fortawesome/free-regular-svg-icons";
import "./Chat.css";
import Message from "./Message";

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

        <div className='scrollable-messages'>
          {/* <Message icon={faGrinBeam} message="Miten voin auttaa?" time='bot 16.5' />
          <Message icon={faUser} message="Haluan banaanin" />
          <Message icon={faGrinBeam} message="Nam!" /> */}
          {messages}
        </div>

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
              let d = new Date()
              setMessages([
                ...messages,
                <Message
                  icon={faUser}
                  message={current}
                  time={'bot '+d.toLocaleTimeString()}
                  key={d.toISOString()}
                />,
                <Message 
                  icon={faGrinBeam}
                  message={bot(current)}
                  time={'sinä '+d.toLocaleTimeString()}
                  key={d.toISOString()+'bot'}
                />
              ]);
              setCurrent("");
            }}
          >
            Lähetä
          </button>
        </div>
      </div>
    </Draggable>
  );
}
