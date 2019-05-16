import React from 'react';
import {botResponses} from './botResponses.js'

const Bot = ( {humanMessage} ) => {
    const getBotResponse = () => { 
      const allowedKeys = Object.keys(botResponses).filter(key => humanMessage.includes(key));
      const filteredBotResponses = allowedKeys
        .reduce((arr, key, idx) => {
          arr[idx] = botResponses[key];
          return arr;
        }, []).join('\n');
      return filteredBotResponses || botResponses['default'];
  }
    return (
      <>
      {getBotResponse()}
      </>
    )
  }

export default Bot;