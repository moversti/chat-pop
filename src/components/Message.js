import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Message({icon, message}) {
    return (
        <div className="chat-bubble">
        
        <FontAwesomeIcon icon={icon} size="2x" />

        {message}
        </div>
    )
  }