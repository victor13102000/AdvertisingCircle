import { createAction, createReducer } from "@reduxjs/toolkit";

export const setInfo = createAction("SET_INFO");

const infoReducer = createReducer(localStorage.getItem("info") === "true"? true : false ,{
    [setInfo]: (state,action) => action.payload
})


export default infoReducer;