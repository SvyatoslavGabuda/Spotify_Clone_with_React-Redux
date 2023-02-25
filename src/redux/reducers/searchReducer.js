import { ADD_TO_SEARCH_RESULT } from "../actions/actions";

const initialState = {
  searchResult: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
