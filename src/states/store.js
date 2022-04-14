import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import infoReducer from "./Info";
import typeReducer from "./Type";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      type: typeReducer,
      info: infoReducer
    },
  });
  
  export default store;
  