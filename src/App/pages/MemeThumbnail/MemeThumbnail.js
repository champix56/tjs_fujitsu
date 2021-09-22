import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import ThumbnailLayout from "../../components/layouts/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "../../components/MemeViewer/MemeViewer";
import store, { memeInitialState } from "../../store/store";
import { Link } from "react-router-dom";

const MemeThumbnail = (props) => {
  const [state, setstate] = useState(memeInitialState);
  useEffect(() => {
    setstate(store.getState().lists);
    store.subscribe(() => setstate(store.getState().lists));
  }, []);
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      <ThumbnailLayout>
        {state.memes.map((e, i) => {
          return (
            <Link to={`/editor/${e.id}`} key={`meme-${i}`} style={{ flex: 1 }}>
              <MemeViewer
                meme={{
                  ...e,
                  image: state.images.find((ef) => ef.id === e.imageId),
                }}
              />
            </Link>
          );
        })}
      </ThumbnailLayout>
    </div>
  );
};

MemeThumbnail.propTypes = {};
MemeThumbnail.defaultProps = {};

export default MemeThumbnail;
