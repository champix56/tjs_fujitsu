import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Button2 from './components/Buttonts/Button';

function App() {
  return (
    <div className="App">
      DEMAT breizh
      <hr/>
      <Button onLeftClick={(evt)=>{
        console.log(evt);
      }} backgroundColor="tomato">
        <div>Mon button</div>
      </Button> 
      <Button/>
      <Button2 >Demat Bretagne</Button2>
      <Button  backgroundColor="white" color="darkblue" style={{textDecoration:'underline', fontStyle:'italic'}}  >Demat Bretagne</Button>
      <Button backgroundColor="yellowgreen" onLeftClick={()=>{}} />
    </div>
  )
}

export default App;
