import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Message({icon, message, time}) {
    return (
        <div className="chat-bubble">
        
        <FontAwesomeIcon icon={icon} size="2x" />
        <div className="time-name">{time}</div>
        <div className="content">{message}</div>
        </div>
    )
  }