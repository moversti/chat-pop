import React from 'react';
import {botResponses} from './botResponses.js'
import Message from './Message.js'

const Bot = ( {icon, message, key} ) => {
    const getBotResponse = () => { 
      const allowedKeys = Object.keys(botResponses).filter(key => message.includes(key));
      const filteredBotResponses = allowedKeys
        .reduce((arr, key, idx) => {
          arr[idx] = botResponses[key];
          return arr;
        }, []);
        if (filteredBotResponses.includes(botResponses.default)) {
          filteredBotResponses.splice(filteredBotResponses.indexOf(botResponses.default), filteredBotResponses.lastIndexOf(botResponses.default));
        }
      return filteredBotResponses.join('\n') || botResponses['default'];
  }
    return (
      <Message icon={icon} message={getBotResponse()} time={key} />
    )
  }

export default Bot;