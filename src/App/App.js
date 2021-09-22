import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import MemeCreator from "./pages/MemeCreator/MemeCreator";
import store, { currentInitialState, memeInitialState } from "./store/store";
const initialState = {
  current: currentInitialState,
  images: memeInitialState.images
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  componentDidMount() {
    this.setState({ current: store.getState().current, images:store.getState().lists.images });
    store.subscribe(() => {
      this.setState({ current: store.getState().current, images:store.getState().lists.images });
    });
  }
  render() {
    return (
      <>
        <div className={styles.App}>
          <Navbar/>


          <MemeCreator/>
        
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}

export default App;
