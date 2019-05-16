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
      <ul>
        {conversation.map(message => <li className={message.sender} key={message.id}>{message.content + '\nt. ' + message.sender}</li>)}
      </ul>
      <form onSubmit={addResponse}>
      <input type="text" onChange={handleInputChange} value={message} placeholder="Send a message"/>
      </form>
      </>
    )
  }

export default Bot;