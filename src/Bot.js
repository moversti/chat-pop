import { botResponses } from "./botResponses.js";

const Bot = (humanMessage) => {
  const getBotResponse = () => {
    const allowedKeys = Object.keys(botResponses).filter(key =>
      humanMessage.includes(key)
    );
    const filteredBotResponses = allowedKeys
      .reduce((arr, key, idx) => {
        arr[idx] = botResponses[key];
        return arr;
      }, []);
      if (filteredBotResponses.includes(botResponses.default)) {
        filteredBotResponses.splice(filteredBotResponses.indexOf(botResponses.default), filteredBotResponses.lastIndexOf(botResponses.default));
      }
    return filteredBotResponses.join("\n") || botResponses.default;
  };
  return getBotResponse();
};

export default Bot;
