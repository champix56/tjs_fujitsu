import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbnailLayout.module.css'

const thumbnailLayoutInitialState={};
const ThumbnailLayout = (props) => {
    const [state, setstate] = useState(thumbnailLayoutInitialState)
    return (
        <div className={styles.ThumbnailLayout} data-testid="ThumbnailLayout" >
            thumbnailLayout
        </div>
    );
};


ThumbnailLayout.propTypes = {

};
ThumbnailLayout.defaultProps={

};

export default ThumbnailLayout;
