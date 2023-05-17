import { configureStore } from "@reduxjs/toolkit";
import foodReducer from './slice';

const Store = configureStore ({
    reducer:{
        Food: foodReducer,
    },
});

export default Store;