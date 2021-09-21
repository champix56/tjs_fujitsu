import { createStore } from "redux";
import { RESSOURCES, REST_ADR } from "../config/config";
const memeInitialState = {
  memes: [],
  images: [],
};
export const MEME_ACTIONS = Object.freeze({
  ADD_MEME: "ADD_MEME",
  ADD_MEMES: "ADD_MEMES",
  ADD_IMAGES: "ADD_IMAGES",
});
const MEME_ACTIONS_PRIVATE = Object.freeze({
  INIT: "INIT",
  UPDT_INIT_VALUES: "UPDT_INIT_VALUES",
});
function memeReducer(state = memeInitialState, action) {
  console.log(action.type);
  switch (action.type) {
    //   public actions
    case MEME_ACTIONS.ADD_MEMES:
      return { ...state, memes: action.values };
    case MEME_ACTIONS.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    case MEME_ACTIONS.ADD_IMAGES:
      return { ...state, images: action.values };

    //   private actions
    case MEME_ACTIONS_PRIVATE.UPDT_INIT_VALUES:
      return { ...state, memes: action.values.memes, images: action.values.images };
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
const store = createStore(memeReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: MEME_ACTIONS_PRIVATE.INIT});
export default store;
