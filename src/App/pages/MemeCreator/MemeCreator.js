import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MemeCreator.module.css";
import FlexLayout from "../../components/layouts/FlexLayout/FlexLayout";
import MemeViewer from "../../components/MemeViewer/MemeViewer";
import MemeEditor from "../../components/MemeEditor/MemeEditor";
import store, {
  currentInitialState,
  memeInitialState,
  CURRENT_MEME_ACTION,
  MEME_ACTIONS
} from "../../store/store";
import { withRouter } from 'react-router-dom'

const MemeCreator = (props) => {
  const [state, setstate] = useState(currentInitialState);
  const [lists, setLists] = useState(memeInitialState);
console.log(props)
  useEffect(() => {
    setstate(store.getState().current);
    setLists(store.getState().lists);
    //store.dispatch({type:MEME_ACTIONS.SELECT_CURRENT, value:currentId})
    store.subscribe(() => {
      setLists(store.getState().lists);
      setstate(store.getState().current);
    });
  }, []);
  useEffect(() => {
    if( props.match.params.id  )
    {
      store.dispatch({type:CURRENT_MEME_ACTION.UPDT_CURRENT,value:lists.memes.find(e=>e.id===Number(props.match.params.id))})
    }
    else{
      store.dispatch({type:CURRENT_MEME_ACTION.CLEAR_CURRENT})
    }
  }, [lists, props.match.params.id ])
 // console.trace(props)
  return (
    <div className={styles.MemeCreator} data-testid="MemeCreator">
      <FlexLayout>
        <MemeViewer
          meme={{
            ...state,
            image: lists.images.find(
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

export default withRouter(MemeCreator);
