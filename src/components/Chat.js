import React from "react";
import Draggable from "react-draggable";

export default function Chat() {
  return (
    <Draggable>
      <div style={{border: '3px solid black', width:'150px', backgroundColor:'lightgreen', height:'350px'}}>
        Hello from Chat!
      </div>
    </Draggable>
  );
}
