export const ADD_TO_ROCK = "ADD_TO_ROCK";
export const ADD_TO_POP = "ADD_TO_POP";
export const ADD_TO_HIPHIP = "ADD_TO_HIPHIP";

// const for FAVREDUCERS =>>>

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

let headers = new Headers({
  // sets the headers
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});

export const mainFetch = (artistName, TYPE) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        dispatch({
          type: TYPE,
          payload: result.data[0],
        });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
