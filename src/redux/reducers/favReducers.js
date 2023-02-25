import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/actions";

const initialState = {
  favSongs: [],
};

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      if (state.favSongs.includes(action.payload)) {
        console.log("è gia preferito");
        return state;
      } else {
        return {
          ...state,
          favSongs: [...state.favSongs, action.payload],
        };
      }

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favSongs: state.favSongs.filter((song) => song !== action.payload),
      };

    default:
      return state;
  }
};
