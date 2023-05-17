import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter:[],
} 

const FoodSlice = createSlice({
    name: 'Food',
    initialState,
    reducers:{

    }
})

export default FoodSlice.reducer;