import React from "react";
import styles from "./App.module.css";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import ThumbnailLayout from "./components/layout/ThumbnailLayout/ThumbnailLayout";
import MemeEditor from "./components/MemeEditor/MemeEditor";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { RESSOURCES, REST_ADR } from "./config/config";
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
          <FlexLayout>
            <MemeViewer
              meme={{
                ...this.state.current,
                image: this.state.images.find(
                  (e) => e.id === this.state.current.imageId
                ),
              }}
            />
            <MemeEditor />
          </FlexLayout>
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}

export default App;
