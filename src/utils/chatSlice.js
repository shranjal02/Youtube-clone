import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages:[]
    },
    reducers: {
        addMessage: (state,action) => {
            state.messages.splice(OFFSET_LIVE_CHAT,1)       //removing 1 message after certain count
            state.messages.unshift(action.payload)  //push from first
        }
    }
})


export const {addMessage} = chatSlice.actions
export default chatSlice.reducer;