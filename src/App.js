import React, {useState} from 'react';
import './App.css';
import Chat from './components/Chat'
import ChatMinimized from './components/ChatMinimized'
import Bot from './chatterbot'

function App() {

  // Käytetään react hooks
  // https://reactjs.org/docs/hooks-intro.html
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState([])


  return (
    <div className="mainContainer">
      {
        minimized ?
        <ChatMinimized click={()=>{
          setMinimized(false)
        }} /> :
        <Chat messages={messages} setMessages={setMessages} click={()=>{
          setMinimized(true)
        }} bot={Bot} />
      }
    </div>
  );
}

export default App;
