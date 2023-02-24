import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { mainFetchReducers } from "../reducers/mainFetchReducer";

const configurePersist = {
  key: "root",
  storage,
  blacklist: ["mainSongs"],
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
