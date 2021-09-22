import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MemeEditor.module.css";
import Button from "../Button/Button";
import store, {
  currentInitialState,
  CURRENT_MEME_ACTION,
  memeInitialState,
} from "../../store/store";

const MemeEditor = (props) => {
  const [images, setimages] = useState(memeInitialState.images);
  const [current, setcurrent] = useState(currentInitialState);
  useEffect(() => {
    setcurrent(store.getState().current);
    setimages(store.getState().lists.images);
    store.subscribe(() => {
      setimages(store.getState().lists.images);
    });
  }, []);

  useEffect(() => {
    store.dispatch({ type: CURRENT_MEME_ACTION.UPDT_CURRENT, value: current });
  }, [current]);
  return (
    <div className={styles.MemeEditor} data-testid="MemeEditor">
      <form onSubmit={(evt)=>{
          evt.preventDefault();
          store.dispatch({type:CURRENT_MEME_ACTION.SAVE_CURRENT});
      }}>
        <label htmlFor="name">Meme name</label>
        <br />
        <input
          type="text"
          id="name"
          value={current.name}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, name: evt.target.value });
          }}
        />
        <hr />
        <h3>Image</h3>
        <select
          value={current.imageId}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current,
              imageId: Number(evt.target.value),
            });
          }}
        >
          {images.map((e, i) => (
            <option key={"image-" + i} value={e.id}>
              {e.url}
            </option>
          ))}
        </select>
        <hr />
        <h3>Text</h3>
        <input
          type="text"
          placeholder="text du meme"
          value={current.text}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, text: evt.target.value });
          }}
        />
        <h4>position</h4>
        <label htmlFor="x">X:</label>
        <input
          type="number"
          className={styles.smallInput}
          value={current.x}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, x: Number(evt.target.value) });
          }}
        />
        <label htmlFor="y">y:</label>
        <input
          type="number"
          className={styles.smallInput}
          value={current.y}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, y: Number(evt.target.value) });
          }}
        />
        <hr />
        <h2>Options</h2>
        <label htmlFor="color">color</label>
        <br />
        <input
          type="color"
          className={styles.smallInput}
          value={current.color}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, color: evt.target.value });
          }}
        />
        <h3>Dimensions</h3>
        <label htmlFor="size">size:</label>
        <input
          type="number"
          className={styles.smallInput}
          min="0"
          value={current.fontSize}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, 
              fontSize: Number(evt.target.value),
            });
          }}
        />
        <label htmlFor="weight">weight:</label>
        <input
          type="number"
          min="100"
          max="900"
          step="100"
          className={styles.smallInput}
          value={current.fontWeight}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, fontWeight: evt.target.value });
          }}
        />
        <h3>Decoration</h3>
        <label htmlFor="underline">
          <u>underline</u>:
        </label>
        <input
          type="checkbox"
          className={styles.smallInput}
          checked={current.underline}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current,
              underline: evt.target.checked,
            });
          }}
        />
        <label htmlFor="weight">
          <i>italic:</i>
        </label>
        <input
          type="checkbox"
          className={styles.smallInput}
          checked={current.italic}
          onChange={(evt) => {
            console.log(evt.target.value);
            setcurrent({ ...current, italic: evt.target.checked });
            // store.dispatch({type: CURRENT_MEME_ACTION.UPDT_CURRENT, value:{}})
          }}
        />
        <hr />
        <Button type="reset" backgroundColor="tomato">
          Reset
        </Button>
        <Button type="submit" backgroundColor="skyblue">
          save
        </Button>
      </form>
    </div>
  );
};

MemeEditor.propTypes = {
  meme: PropTypes.object.isRequired,
};
MemeEditor.defaultProps = {};

export default MemeEditor;
