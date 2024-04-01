import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:'data',
    initialState:{
        darkMode:false,
    },
    reducers:{
        changeDarkMode(state){
            state.darkMode=!state.darkMode;
        }
    }
});
export const{changeDarkMode}=dataSlice.actions;
export default dataSlice.reducer;