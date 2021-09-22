import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import MemeCreator from "./pages/MemeCreator/MemeCreator";
import MemeThumbnail from "./pages/MemeThumbnail/MemeThumbnail";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <div className={styles.App}>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <h1>Degemer mat im breizh meme generator</h1>
              <img src="/img/accueil.jpg" style={{height:'calc( 100% - 150px )'}} />
            </Route>
            <Route path="/editor">
              <MemeCreator />
            </Route>
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/">
                <h1>ERROR 404 : NOT FOUND</h1>
                L'adresse demandée n'a pas de composition de page connu
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
