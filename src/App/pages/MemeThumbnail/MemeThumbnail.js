import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.css'
import ThumbnailLayout from '../../components/layouts/ThumbnailLayout/ThumbnailLayout';
import MemeViewer from '../../components/MemeViewer/MemeViewer';
import store, { memeInitialState } from '../../store/store';


const MemeThumbnail = (props) => {
    const [state, setstate] = useState(memeInitialState)
    useEffect(() => {
      setstate(store.getState().lists)
      store.subscribe(()=>setstate(store.getState().lists))
    }, [])
    return (
        <div className={styles.MemeThumbnail} data-testid="MemeThumbnail" >
          <ThumbnailLayout>
            {state.memes.map((e, i) => {
              return (
                <MemeViewer
                  key={`meme-${i}`}
                  meme={{
                    ...e,
                    image: state.images.find((ef) => ef.id === e.imageId),
                  }}
                />
              );
            })}
          </ThumbnailLayout>
        </div>
    );
};


MemeThumbnail.propTypes = {

};
MemeThumbnail.defaultProps={

};

export default MemeThumbnail;
