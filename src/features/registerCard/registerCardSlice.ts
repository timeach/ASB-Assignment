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

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default registerCardSlice.reducer;
