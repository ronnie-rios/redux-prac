import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCount = {
    count: 0
}
//first prop = name
//second is initial state always
//
const countSlice = createSlice({
    name: 'countSlice',
    initialState: initialCount,
    reducers: {
        add: (state) => {
            state.count +=1;
        },
        subtract: (state) => {
            state.count -=1
        },
        reset: () => {
            return initialCount;
        }
    }
})

const store = configureStore({
    reducer: countSlice.reducer
});

export const countActions = countSlice.actions;

export default store;