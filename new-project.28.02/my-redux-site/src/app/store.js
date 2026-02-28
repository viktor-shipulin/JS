import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import noodleReducer from '../features/noodle/noodleSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        noodle: noodleReducer
    }
});