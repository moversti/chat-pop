import React, {useState} from 'react';
import './App.css';
import Chat from './components/Chat'
import ChatMinimized from './components/ChatMinimized'
import Bot from './Bot'

function App() {

  // Käytetään react hooks
  // https://reactjs.org/docs/hooks-intro.html
  const [minimized, setMinimized] = useState(false)



  return (
    <React.Fragment>
      {
        minimized ?
        <ChatMinimized click={()=>{
          setMinimized(false)
        }} /> :
        <Chat click={()=>{
          setMinimized(true)
        }} bot={Bot} />
      }
    </React.Fragment>
  );
}

export default App;
