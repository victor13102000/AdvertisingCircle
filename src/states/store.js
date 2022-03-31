import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import typeReducer from "./Type";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      type: typeReducer
    },
  });
  
  export default store;
  