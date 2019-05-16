import React, { useState } from 'react';

const Bot = () => {
  const [message, setMessage] = useState('');
  const messageLog = [
    {
      content: 'Ask me about fruits!',
      id: 1,
      sender: 'bot'
    },
  ]
  const [conversation, setConversation] = useState(messageLog);
  const addResponse = (event) => {
    event.preventDefault();
    const responseObject = {
      content: message,
      id: conversation.length + 1,
      sender: 'human'
    }

    const getBotResponse = (message) => { 
      const botResps = {
        "apple" : "How do you like them apples?",
        "banana" : "Banana is good!",
        "orange" : "I am not a fan of orange",
        "default" : "I have never heard of that fruit..."
      }
      const allowedKeys = Object.keys(botResps).filter(key => message.includes(key));
      const filteredBotResps = allowedKeys
        .reduce((arr, key, idx) => {
          arr[idx] = botResps[key];
          return arr;
        }, []).join('\n');
      return filteredBotResps || botResps['default']
    }

    const botResponse = getBotResponse(message);
    
    const botResponseObject = {
      content: botResponse,
      id: conversation.length + 2,
      sender: 'bot'
    }

    setConversation(conversation.concat(responseObject, botResponseObject));
    setMessage('');
  }
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  }
    return (
      <>
      <form onSubmit={addResponse}>
      <input type="text" onChange={handleInputChange} value={message} placeholder="Send a message"/>
      </form>
      <ul >
        {conversation.map(message => <li className={message.sender} key={message.id}>{message.content + '\nt. ' + message.sender}</li>)}
      </ul>
      </>
    )
  }

export default Bot;