import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

import waltzSound from './audios/waltz1.mp3';
import rainSound from './audios/rain.mp3';
import sinigamiImage from './images/sinigami.png';
import rainImage from './images/rain1.png';

type MeditationState = {
    playFlag: boolean;
    counttime: number;
    meditations: {
        type: string;
        title: string;
        image: string;
        sound: string;
        time: number;
    }[];
    playType?: string;
};

const initialState: MeditationState = {
    playFlag: true,
    counttime: 0,
    meditations: [
        {
            type: 'waltz1',
            title: '死神とワルツ',
            image: sinigamiImage,
            sound: waltzSound,
            time: 1000 * 116,
        },
        {
            type: 'rain',
            title: '雨音',
            image: rainImage,
            sound: rainSound,
            time: 1000 * 126,
        },
    ],
};
export const meditationSlice = createSlice({
    name: 'Meditations',
    initialState: initialState,
    reducers: {
        changeFlag: (state, action) => {
            state.playFlag = action.payload;
        },
        changeType: (state, action) => {
            state.playType = action.payload;
        },
        changeCountdown: (state, action) => {
            state.counttime = action.payload;
        },
    },
});

export const { changeFlag, changeType, changeCountdown } =
    meditationSlice.actions;
export const selectMeditation = (state: RootState) => state.meditations;
export default meditationSlice.reducer;
