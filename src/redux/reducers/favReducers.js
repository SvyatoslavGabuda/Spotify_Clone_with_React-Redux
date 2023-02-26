import { ADD_TO_FAV, REMOVE_FROM_FAV, REMOVE_FROM_SAVED, SAVE_TO_FAV } from "../actions/actions";

const initialState = {
  favSongs: [],
  savedFavSongs: [],
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
    case SAVE_TO_FAV:
      console.log("add");
      if (state.savedFavSongs.includes(action.payload)) {
        console.log("è gia preferito");
        return state;
      } else {
        return {
          ...state,
          savedFavSongs: [...state.savedFavSongs, action.payload],
        };
      }

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favSongs: state.favSongs.filter((song) => song !== action.payload),
      };

    case REMOVE_FROM_SAVED:
      console.log(
        "rem",
        state.savedFavSongs.filter((song) => song.id !== action.payload)
      );
      return {
        ...state,
        savedFavSongs: state.savedFavSongs.filter((song) => song.id !== action.payload),
      };

    default:
      return state;
  }
};
