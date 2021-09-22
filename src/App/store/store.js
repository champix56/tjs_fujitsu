import { combineReducers, createStore } from "redux";
import { RESSOURCES, REST_ADR } from "../config/config";
export const memeInitialState = {
  memes: [],
  images: [],
};
export const MEME_ACTIONS = Object.freeze({
  ADD_MEME: "ADD_MEME",
  ADD_MEMES: "ADD_MEMES",
  ADD_IMAGES: "ADD_IMAGES",
  SELECT_CURRENT: "SELECT_CURRENT",
});
const MEME_ACTIONS_PRIVATE = Object.freeze({
  INIT: "INIT",
  UPDT_INIT_VALUES: "UPDT_INIT_VALUES",
});
function memeReducer(state = memeInitialState, action) {
  console.trace(action.type);
  switch (action.type) {
    //   public actions
      case MEME_ACTIONS.SELECT_CURRENT:
        //store.dispatch({type:CURRENT_MEME_ACTION.UPDT_CURRENT, value: state.memes.find(e=>e.id===action.value)})
        return state;
      case MEME_ACTIONS.ADD_MEMES:
      return { ...state, memes: action.values };
    case MEME_ACTIONS.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    case MEME_ACTIONS.ADD_IMAGES:
      return { ...state, images: action.values };

    //   private actions
    case MEME_ACTIONS_PRIVATE.UPDT_INIT_VALUES:
      return {
        ...state,
        memes: action.values.memes,
        images: action.values.images,
      };
    case MEME_ACTIONS_PRIVATE.INIT:
      const p1 = fetch(`${REST_ADR}${RESSOURCES.memes}`).then((f) => f.json());
      const p2 = fetch(`${REST_ADR}${RESSOURCES.images}`).then((f) => f.json());

      Promise.all([p1, p2]).then((values) => {
        store.dispatch({
          type: MEME_ACTIONS_PRIVATE.UPDT_INIT_VALUES,
          values: { memes: values[0], images: values[1] },
        });
      });
      return state;
    default:
      return state;
  }
}

export const currentInitialState = {
  name: "",
  x: 0,
  y: 0,
  text: "",
  color: "#000",
  fontSize: 10,
  fontWeight: 100,
  italic: false,
  underline: false,
  imageId: -1,
};
export const CURRENT_MEME_ACTION = Object.freeze({
  UPDT_CURRENT: "UPDT_CURRENT",
  SAVE_CURRENT: "SAVE_CURRENT",
  CLEAR_CURRENT: "CLEAR_CURRENT",
});
const currentReducer = (state = currentInitialState, action) => {
  switch (action.type) {
    case CURRENT_MEME_ACTION.CLEAR_CURRENT:
      return { currentInitialState };
    case CURRENT_MEME_ACTION.SAVE_CURRENT:
      const fetchConfig={
        headers: { "Content-Type": "application/json" },
        method: `${state.id!==undefined ? "PUT" : "POST"}`,
        body:JSON.stringify(state)
      }
      fetch(`${REST_ADR}${RESSOURCES.memes}${state.id!==undefined ? "/" + state.id : ""}`,fetchConfig ).then(
        (f) => {
         store.dispatch({ type: MEME_ACTIONS_PRIVATE.INIT });
        },
        (f) => {}
      );
      return state;
    case CURRENT_MEME_ACTION.UPDT_CURRENT:
      return { ...state, ...action.value };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ lists: memeReducer, current: currentReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: MEME_ACTIONS_PRIVATE.INIT });
export default store;
