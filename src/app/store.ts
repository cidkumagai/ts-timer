import { configureStore } from '@reduxjs/toolkit';
import meditationReducer from '../meditation/meditationSlice';

export const store = configureStore({
    reducer: {
        meditations: meditationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
