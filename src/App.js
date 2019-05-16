import React, {useState} from 'react';
import './App.css';
import Chat from './components/Chat'
import ChatMinimized from './components/ChatMinimized'

function App() {

  // Käytetään react hooks
  // https://reactjs.org/docs/hooks-intro.html
  const [minimized, setMinimized] = useState(false)



  return (
    <div>
      {
        minimized ?
        <ChatMinimized click={()=>{
          setMinimized(false)
        }} /> :
        <Chat click={()=>{
          setMinimized(true)
        }} />
      }
    </div>
  );
}

export default App;
