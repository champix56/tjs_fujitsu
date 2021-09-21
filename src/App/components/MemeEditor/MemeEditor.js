import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeEditor.module.css";
import Button from "../Button/Button";

const memeEditorInitialState = {};
const MemeEditor = (props) => {
  //const [state, setstate] = useState(memeEditorInitialState);
  return (
    <div className={styles.MemeEditor} data-testid="MemeEditor">
      <form>
        <label htmlFor="name">Meme name</label>
        <br />
        <input
          type="text"
          id="name"
          value={props.meme.name}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, name: evt.target.value });
          }}
        />
        <hr />
        <h3>Image</h3>
        <select
          value={props.meme.imageId}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, imageId: Number(evt.target.value) });
          }}
        >
          {props.images.map((e, i) => (
            <option key={"image-"+i} value={e.id}>{e.url}</option>
          ))}
        </select>
        <hr />
        <h3>Text</h3>
        <input
          type="text"
          placeholder="text du meme"
          value={props.meme.text}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <h4>position</h4>
        <label htmlFor="x">X:</label>
        <input
          type="number"
          className={styles.smallInput}
          value={props.meme.x}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, x: Number(evt.target.value) });
          }}
        />
        <label htmlFor="y">y:</label>
        <input
          type="number"
          className={styles.smallInput}
          value={props.meme.y}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, y: Number(evt.target.value) });
          }}
        />
        <hr />
        <h2>Options</h2>
        <label htmlFor="color">color</label>
        <br />
        <input
          type="color"
          className={styles.smallInput}
          value={props.meme.color}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, color: evt.target.value });
          }}
        />
        <h3>Dimensions</h3>
        <label htmlFor="size">size:</label>
        <input
          type="number"
          className={styles.smallInput}
          min="0"
          value={props.meme.fontSize}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({
              ...props.meme,
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
          value={props.meme.fontWeight}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, fontWeight: evt.target.value });
          }}
        />
        <h3>Decoration</h3>
        <label htmlFor="underline">
          <u>underline</u>:
        </label>
        <input
          type="checkbox"
          className={styles.smallInput}
          checked={props.meme.underline}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({
              ...props.meme,
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
          checked={props.meme.italic}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormChange({ ...props.meme, italic: evt.target.checked });
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
  onFormChange: PropTypes.func.isRequired,
};
MemeEditor.defaultProps = {};

export default MemeEditor;
