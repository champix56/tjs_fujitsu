import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbnailLayout.module.css'

const ThumbnailLayout = (props) => {
    return (
        <div className={styles.ThumbnailLayout} data-testid="ThumbnailLayout" >
            {props.children}
        </div>
    );
};


ThumbnailLayout.propTypes = {
    children:PropTypes.any.isRequired,
};
ThumbnailLayout.defaultProps={

};

export default ThumbnailLayout;
