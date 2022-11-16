import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


interface registerCardState {
    list: any [] 
  }
  
const initialState : registerCardState = {
    list:  []
  }

export const registerCardSlice = createSlice({
  name: 'registerCard',
  initialState,
  reducers: {
    addCard: (state, action) => {
        state.list.push(action.payload)
    }
  },
});

export const { addCard } = registerCardSlice.actions;

export const selectRegisterCard = (state: RootState) => state.registerCard.list;

export default registerCardSlice.reducer;
