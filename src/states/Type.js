import { createAction, createReducer } from "@reduxjs/toolkit";

export const setType = createAction("SET_TYPE");

const typeReducer = createReducer([],{
    [setType]: (state,action) => action.payload
})


export default typeReducer;