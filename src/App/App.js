import React from "react";
import styles from "./App.module.css";
const initialState = {
  memes: [
    {
      id: 0,
      name: "react fun",
      x: 100,
      y: 420,
      text: "React is fun",
      color: "pink",
      fontSize: 40,
      fontWeight: 900,
      italic: false,
      underline: true,
      imageId: 0,
    },
    {
      id: 1,
      name: "react fun",
      x: 100,
      y: 420,
      text: "React of clients is not fun",
      color: "pink",
      fontSize: 40,
      fontWeight: 900,
      italic: false,
      underline: true,
      imageId: 1,
    },
  ],
  current: {
    name: "welcome en bretagne",
    x: 100,
    y: 420,
    text: "Degemer mat im breizh",
    color: "pink",
    fontSize: 40,
    fontWeight: 900,
    italic: false,
    underline: true,
    imageId:2,
  },
  images: [
    {
      id: 0,
      url: "/img/meme/animals.jpg",
      w: 1024,
      h: 682,
    },
    {
      id: 1,
      url: "/img/meme/animals.jpg",
      w: 640,
      h: 400,
    },
    {
      id:2,
      url: "/img/meme/gwenhadu.jpg",
      w: 1200,
      h: 900,
    }
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={styles.App}>
      
    </div>;
  }
}

export default App;
