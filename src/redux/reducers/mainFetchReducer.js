import { ADD_TO_HIPHIP, ADD_TO_POP, ADD_TO_ROCK } from "../actions/actions";

const initialState = {
  rockSongs: [],
  popSongs: [],
  hipHopSongs: [],
};

export const mainFetchReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ROCK:
      return {
        ...state,
        rockSongs: [...state.rockSongs, action.payload],
      };
    case ADD_TO_POP:
      return {
        ...state,
        popSongs: [...state.popSongs, action.payload],
      };
    case ADD_TO_HIPHIP:
      return {
        ...state,
        hipHopSongs: [...state.hipHopSongs, action.payload],
      };

    default:
      return state;
  }
};
