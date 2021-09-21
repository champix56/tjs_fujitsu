import React from 'react';
import './App.css';
import MemeViewer from './components/MemeViewer/MemeViewer';

function App() {
  return (
    <div className="App">
      <MemeViewer meme={
        {
          name: 'Bienvenu en bretagne',
          x: 100, y: 420,
          text: 'Degemer mat im breizh',
          color:'pink',
          fontSize:40,
          fontWeight:900,
          italic:false,
          underline:true,
          image: {
            url: '/img/meme/gwenhadu.jpg',
            w: 1200,
            h: 900
          }
        }
      } />
    </div>
  )
}

export default App;