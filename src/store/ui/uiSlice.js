
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
        initialState: {
        isDateModaleOpen:false
    },
    reducers: {
        onOpenModal:(state)=>{
            state.isDateModaleOpen=true
        },
        onCloseModal:(state)=>{
            state.isDateModaleOpen=false
        }

    }
});


 export const { onOpenModal, onCloseModal } = uiSlice.actions;