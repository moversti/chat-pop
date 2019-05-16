import React from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import './Chat.css'


export default function Chat({ click }) {
  return (
    <Draggable handle="#handle">
      <div style={{border: '2px solid black', width:'150px', backgroundColor:'lightgrey', height:'350px'}}>
        <div style={{border: '1px solid black', width:'148px', backgroundColor:'purple', height:'30px', left:'1px'}}
        id='handle'>
          <div onClick={click} style={{float:'right', marginRight:'4px', height:'100%'}}>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
        </div>
        Bot: Lorem ipsum <br /> You: Lorem ipsum <br /> Bot: Lorem ipsum <br /> You: Lorem ipsum <br /> Bot: Lorem ipsum
      </div>
    </Draggable>
  );
}
