import React, {useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import './Message.css'
import {scrollToBottom} from '../util'

export default function BotMessage({ icon, message, timeName, showFeedbackIcons, chatClassName, givePositive, giveNegative}) {
    const [msg, setMsg] = useState('')
    useEffect(()=>{
        message.then((a)=>{
            setMsg(a)
        })
    })
    useEffect(scrollToBottom);
  return (
    <div className={chatClassName}>
      <FontAwesomeIcon icon={icon} size="2x" />
      <div className="time-name">{timeName}</div>
      <div className="content">{msg}</div>
      {showFeedbackIcons &&
        <div className='feedback-icons'>
          <span onClick={giveNegative}>
            <FontAwesomeIcon icon={faThumbsDown} className='feedback-negative' />
          </span>
          <span onClick={givePositive}>
            <FontAwesomeIcon icon={faThumbsUp} className='feedback-positive' />
          </span>
        </div>
      }
    </div>
  );
}
