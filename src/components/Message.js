import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Message({icon, message, timeName}) {
    return (
        <div className="chat-bubble">
        
        <FontAwesomeIcon icon={icon} size="2x" />
        <div className="time-name">{timeName}</div>
        <div className="content">{message}</div>
        </div>
    )
  }