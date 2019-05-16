import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './ChatMinimized.css'

export default function ChatMinimized({click}) {
    return (
      <div className="minimized">
          <div onClick={click} className="arrow">
              <FontAwesomeIcon icon={faArrowUp} />
          </div>
      </div>
    );
  }
  