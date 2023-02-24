import { ADD_TO_FAV } from "../actions/actions";

const initialState = {
  favSongs: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favSongs: [...favSongs, action.payload],
      };

    default:
      return state;
  }
};
