import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { albumFetchReducers } from "../reducers/albumFetchReducer";
import { artistFetchReducers } from "../reducers/artistFetchReducer";
import { favReducer } from "../reducers/favReducers";
import { mainFetchReducers } from "../reducers/mainFetchReducer";
import { playerReduce } from "../reducers/playerReducer";
import { searchReducer } from "../reducers/searchReducer";

const configurePersist = {
  key: "root",
  storage,
  blacklist: ["mainSongs", "search"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_LOCAL_STORAGE_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};
const allReducer = combineReducers({
  mainSongs: mainFetchReducers,
  fav: favReducer,
  search: searchReducer,
  player: playerReduce,
  artist: artistFetchReducers,
  album: albumFetchReducers,
});
const persistRed = persistReducer(configurePersist, allReducer);

export const store = configureStore({
  reducer: persistRed,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
