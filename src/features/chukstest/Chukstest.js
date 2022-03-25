import {createSlice} from '@reduxjs/toolkit'

export const Chukstest = createSlice({
    name:"chukstest",
    initialState:{
        dialog:{
            "open":false,
            "message":"Pariatur esse pariatur aliquip qui incididunt. Anim culpa mollit labore duis enim esse aliquip enim. Culpa sint enim fugiat irure sit irure culpa.",
            "error":false,
            "title":"THIS IS A TEST",
            "instruction":false,
            "alert":true,
        },
        user:null,
        score:0,
        index:0,
        option:{},
    },
    reducers:{
        setDialog:(state,action) => {
            state.dialog = action.payload;
        },
        closeDialog:(state)=>{
            state.dialog = {...state.dialog,"open":false }
        },
        setUser:(state,action) => {
            state.user = action.payload;
        },
        logout:(state) => {
            state.user = null;
        },
        increment:(state) => {
            state.index = state.index+1
        },
        reset:(state) => {
            state.index = 0
        },
        resetScore:(state) => {
            state.score = 0
        },
        incrementScore:(state) => {
            state.score = state.score+1
        },
        setOption:(state,action) => {
            state.option = action.payload
        },
        
    },
});

export const {setDialog, closeDialog, setUser, logout, increment,incrementScore,reset, resetScore, setOption} = Chukstest.actions;
export const getDialog = (state) => state.chukstest.dialog;
export const getUser = (state) => state.chukstest.user;
export const getIndex = (state) => state.chukstest.index;
export const getScore = (state) => state.chukstest.score;
export const getOption = (state) => state.chukstest.option;

export default Chukstest.reducer