import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import './Message.css'

export default function Message({ icon, message, timeName, showFeedbackIcons}) {
  return (
    <div className="chat-bubble">
      <FontAwesomeIcon icon={icon} size="2x" />
      <div className="time-name">{timeName}</div>
      <div className="content">{message}</div>
      {showFeedbackIcons &&
        <div className='feedback-icons'>
          <FontAwesomeIcon icon={faThumbsDown} className='feedback-negative' />
          <FontAwesomeIcon icon={faThumbsUp} className='feedback-positive' />
        </div>
      }
    </div>
  );
}
