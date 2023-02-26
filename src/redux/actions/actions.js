export const ADD_TO_ROCK = "ADD_TO_ROCK";
export const ADD_TO_POP = "ADD_TO_POP";
export const ADD_TO_HIPHIP = "ADD_TO_HIPHIP";

// const for FAVREDUCERS =>>>
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SAVE_TO_FAV = "SAVE_TO_FAV";
export const REMOVE_FROM_SAVED = "REMOVE_FROM_SAVED";
// const for SEARCREDUCER=>>>>>>>
export const ADD_TO_SEARCH_RESULT = "ADD_TO_SEARCH_RESULT";
// const for plyayer
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
//const for ARTISTREDUCE
export const ADD_TO_ARTISTSONGS = "ADD_TO_ARTISTSONGS";
export const ARTIST = "ARTIST";
//const fo ALBUMREDUCE
export const ADD_TO_ALBUM = "ADD_TO_ALBUM";

// sets the headers
let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});
//fetch mainpage
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
        // console.log(result);
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
// so che è una ripetizione della ricercha di sopra ma preferisco avere due tipi separati perchè in un caso
// ritora un oggetto (result.data[0])
//nell altro un array di ogetti
export const searchFetch = (searchQuery) => {
  return async (dispatch) => {
    try {
      console.log("dentro");
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let res = await response.json();
        console.log("res" + res);
        dispatch({
          type: ADD_TO_SEARCH_RESULT,
          payload: res.data,
        });
      } else {
        console.log("erroreee");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//fetch artisti
export const artistFetch = (artistId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();

        dispatch({
          type: ARTIST,
          payload: artist,
        });

        let tracksResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.name,
          {
            method: "GET",
            headers,
          }
        );

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();

          dispatch({
            type: ADD_TO_ARTISTSONGS,
            payload: tracklist.data,
          });
        }
      } else {
        console.log("some problem");
      }
    } catch (exception) {
      console.log(exception);
    }
  };
};
// fetch ALBUM

export const albumFetch = (albumId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let album = await response.json();
        console.log(album);
        // setAlbum(album);
        dispatch({
          type: ADD_TO_ALBUM,
          payload: album,
        });
      } else {
        console.log("errrore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
