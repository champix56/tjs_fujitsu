import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import MemeCreator from "./pages/MemeCreator/MemeCreator";
class App extends React.Component {
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
