import { createSlice } from "@reduxjs/toolkit";

const notesSlice=createSlice({
    name:'store',
    initialState:{
        items:JSON.parse(localStorage.getItem('notes')) || []
    },
    reducers:{
        addNotes:(state,actions) => {
            state.items.push(actions.payload)
            
        },
        deleteNotes:(state,actions) => {
            state.items.splice(actions.payload,1)
        }
    }
})

export const {addNotes,deleteNotes} = notesSlice.actions
export default notesSlice.reducer