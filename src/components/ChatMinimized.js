import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function ChatMinimized({click}) {
    return (
      <div style={{position:"fixed", bottom:'0', right:'0', border:'1px solid black'}} >
          Chat is minimized
          <div onClick={click} style={{display:'inline'}}>
              <FontAwesomeIcon icon={faArrowUp} />
          </div>
      </div>
    );
  }
  