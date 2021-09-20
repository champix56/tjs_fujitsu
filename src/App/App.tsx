import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      DEMAT breizh
      <hr/>
      <Button onLeftClick={(arg)=>{
        console.log(arg);
      }}>
        <div>Mon button</div>
      </Button> 
      <Button/>
      <Button >Demat Bretagne</Button>
      <Button onLeftClick={()=>{}} />
    </div>
  )
}

export default App;
