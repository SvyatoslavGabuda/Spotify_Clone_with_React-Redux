import { ADD_TO_ALBUM } from "../actions/actions";

const initialState = {
  albumSongs: [],
};

export const albumFetchReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ALBUM:
      return {
        ...state,
        albumSongs: action.payload,
      };

    default:
      return state;
  }
};
