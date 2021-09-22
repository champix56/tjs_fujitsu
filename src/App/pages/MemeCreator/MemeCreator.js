import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MemeCreator.module.css";
import FlexLayout from "../../components/layouts/FlexLayout/FlexLayout";
import MemeViewer from "../../components/MemeViewer/MemeViewer";
import MemeEditor from "../../components/MemeEditor/MemeEditor";
import store, {
  currentInitialState,
  memeInitialState,
} from "../../store/store";

const MemeCreator = (props) => {
  const [state, setstate] = useState(currentInitialState);
  const [images, setimages] = useState(memeInitialState.images);
  useEffect(() => {
    setstate(store.getState().current);
    setimages(store.getState().lists.images);
    store.subscribe(() => {
      setimages(store.getState().lists.images);
      setstate(store.getState().current);
    });
  }, []);
  return (
    <div className={styles.MemeCreator} data-testid="MemeCreator">
      <FlexLayout>
        <MemeViewer
          meme={{
            ...state,
            image: images.find(
              (e) => e.id === state.imageId
            ),
          }}
        />
        <MemeEditor />
      </FlexLayout>
    </div>
  );
};

MemeCreator.propTypes = {};
MemeCreator.defaultProps = {};

export default MemeCreator;
