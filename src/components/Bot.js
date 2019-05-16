import React, { useState } from 'react';
import {botResponses} from './botResponses.js'

const Bot = () => {
  const [message, setMessage] = useState('');
  const messageLog = [
    {
      content: 'Ask me about fruits!',
      id: 1,
      sender: 'bot'
    }
  ]
  const [conversation, setConversation] = useState(messageLog);
  const addResponse = (event) => {
    event.preventDefault();
    const responseObject = {
      content: message,
      id: conversation.length + 1,
      sender: 'human' //Määrittää ihmisen viestin classNamen
    }

    const getBotResponse = (message) => { 
      const allowedKeys = Object.keys(botResponses).filter(key => message.includes(key));
      const filteredBotResponses = allowedKeys
        .reduce((arr, key, idx) => {
          arr[idx] = botResponses[key];
          return arr;
        }, []).join('\n');
      return filteredBotResponses || botResponses['default'];
    }

    const botResponse = getBotResponse(message);
    
    const botResponseObject = {
      content: botResponse,
      id: conversation.length + 2,
      sender: 'bot' //Määrittää botin vastauksen classNamen
    }

    setConversation(conversation.concat(responseObject, botResponseObject));
    setMessage('');
  }
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  }
    return (
      <>
        {conversation.map(message => <div className={message.sender + " chat-bubble"} key={message.id}>{message.content + '\nt. ' + message.sender}</div>)}
      <form id="chatform" onSubmit={addResponse}>
      <input className="chat" type="text" onChange={handleInputChange} value={message} placeholder="Send a message"/>
      </form>
      <button className="send" type="submit" form="chatform" value="Submit">Send</button>
      </>
    )
  }

export default Bot;