import React from 'react';
import './App.css';
import Chat from './components/Chat'

function App() {
  return (
    <div>
      <Chat click={()=>{
        console.log('Minimize button clicked')
      }} />
    </div>
  );
}

export default App;
