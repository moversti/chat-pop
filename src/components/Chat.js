import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { faGrinBeam, faUser } from "@fortawesome/free-regular-svg-icons";
import "./Chat.css";
import Message from "./Message";

function scrollToBottom() {
  let element = document.querySelector(".scrollable-messages");
  element.scrollTop = element.scrollHeight;
}

export default function Chat({ click, bot, messages, setMessages }) {
  const [current, setCurrent] = useState("");
  useEffect(scrollToBottom);
  return (
    <Draggable handle="#handle" bounds="body">
      <div className="window">
        <div className="bar" id="handle">
          <div onClick={click} className="minimize">
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
        </div>

        <div className="scrollable-messages">
          {/* <Message icon={faGrinBeam} message="Miten voin auttaa?" time='bot 16.5' />
          <Message icon={faUser} message="Haluan banaanin" />
          <Message icon={faGrinBeam} message="Nam!" /> */}
          {messages}
        </div>

        <div className="chat">
          <form>
            <input
              placeholder="Kirjoita viesti tähän..."
              type="text"
              value={current}
              onChange={e => {
                setCurrent(e.target.value);
              }}
            />
            <button
              disabled={current.length<1}
              type="submit"
              className="send"
              onClick={(e) => {
                e.preventDefault()
                let d = new Date();
                setMessages([
                  ...messages,
                  <Message
                    icon={faUser}
                    message={current}
                    timeName={"sinä " + d.toLocaleTimeString()}
                    key={d.toISOString()}
                    chatClassName='chat-bubble-user'
                  />,
                  <Message
                    icon={faGrinBeam}
                    message={bot(current)}
                    timeName={"bot " + d.toLocaleTimeString()}
                    key={d.toISOString() + "bot"}
                    showFeedbackIcons={true}
                    chatClassName='chat-bubble'
                  />
                ]);
                setCurrent("");
              }}
            >
              <FontAwesomeIcon icon={faChevronCircleRight} className={current.length<1 ? 'send-disabled' : ''} />
            </button>
          </form>
        </div>
      </div>
    </Draggable>
  );
}
