import React from "react";
import styles from "./App.module.css";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import ThumbnailLayout from "./components/layout/ThumbnailLayout/ThumbnailLayout";
import MemeEditor from "./components/MemeEditor/MemeEditor";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { RESSOURCES, REST_ADR } from "./config/config";
import store from './store/store'
const initialState = {
  memes: [],
  current: {
    name: "welcome en bretagne",
    x: 100,
    y: 420,
    text: "Degemer mat im breizh",
    color: "#ACACAC",
    fontSize: 40,
    fontWeight: 900,
    italic: false,
    underline: true,
    imageId: 2,
  },
  images: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  componentDidMount() {
    const p1 = fetch(`${REST_ADR}${RESSOURCES.memes}`).then((f) => f.json());
    /*
    //si pas synchronisé par Promise.all
    .then(arr=>{
        this.setState({memes:arr});
        return arr;
      })*/
    const p2 = fetch(`${REST_ADR}${RESSOURCES.images}`).then((f) => f.json());
    /*
    //si pas synchronisé par Promise.all
    .then(arr=>{
        this.setState({images:arr});
        return arr;
      })*/
    Promise.all([p1, p2]).then((fs) => {
      console.log(fs);
      this.setState({ memes: fs[0], images: fs[1] });
    });
  }
  render() {
    return (
      <>
        <div className={styles.App}>
          <FlexLayout>
            <MemeViewer meme={{...this.state.current,image:this.state.images.find(e=>e.id===this.state.current.imageId)}}/>
            <MemeEditor meme={this.state.current} images={this.state.images} onFormChange={(currentInForm=>{
              this.setState({current:currentInForm});
            })} />
          </FlexLayout>
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}

export default App;
