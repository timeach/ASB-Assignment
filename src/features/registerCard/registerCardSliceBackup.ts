import { createSlice } from "@reduxjs/toolkit";

interface registerCardState {

  list: any [] 
}

const initialState : registerCardState = {

  list:  []
}

export const registerCardSlice = createSlice({
    name: "registerCard",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.list.push(action.payload)
        }

    }
})

export default registerCardSlice.reducer;