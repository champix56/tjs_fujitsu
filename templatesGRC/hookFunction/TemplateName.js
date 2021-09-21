import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css'

const templateNameInitialState={};
const TemplateName = (props) => {
    const [state, setstate] = useState(templateNameInitialState)
    return (
        <div className={styles.TemplateName} data-testid="TemplateName" >
            templateName
        </div>
    );
};


TemplateName.propTypes = {

};
TemplateName.defaultProps={

};

export default TemplateName;
