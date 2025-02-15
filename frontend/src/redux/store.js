import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlide'

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;