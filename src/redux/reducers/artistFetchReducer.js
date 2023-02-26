import { ADD_TO_ARTISTSONGS, ARTIST } from "../actions/actions";

const initialState = {
  artistSongs: [],
  artist: [],
};

export const artistFetchReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ARTISTSONGS:
      return {
        ...state,
        artistSongs: action.payload,
      };
    case ARTIST:
      return {
        ...state,
        artist: action.payload,
      };

    default:
      return state;
  }
};
