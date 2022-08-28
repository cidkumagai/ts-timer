import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

import dogSound from './audios/dog.mp3';
import springSound from './audios/spring.mp3';
import eliseSound from './audios/elise.mp3';
import flowerSound from './audios/flower.mp3';
import walnutSound from './audios/walnut.mp3';
import dogImage from './images/dog.png';
import springImage from './images/spring.png';
import eliseImage from './images/elise.png';
import flowerImage from './images/flower.png';
import walnutImage from './images/walnut.png';

type MeditationState = {
    playFlag: boolean;
    counttime: number;
    meditations: {
        type: string;
        composer: string;
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
            type: 'dog',
            composer: 'ショパン',
            title: '子犬のワルツ',
            image: dogImage,
            sound: dogSound,
            time: 1000 * 101,
        },
        {
            type: 'spring',
            composer: 'ヴィヴァルディ',
            title: '春',
            image: springImage,
            sound: springSound,
            time: 1000 * 184,
        },
        {
            type: 'elise',
            composer: 'ベートーヴェン',
            title: 'エリーゼのために',
            image: eliseImage,
            sound: eliseSound,
            time: 1000 * 157,
        },
        {
            type: 'flower',
            composer: 'チャイコフスキー',
            title: '花のワルツ',
            image: flowerImage,
            sound: flowerSound,
            time: 1000 * 382,
        },
        {
            type: 'walnut',
            composer: 'チャイコフスキー',
            title: 'くるみ割り人形',
            image: walnutImage,
            sound: walnutSound,
            time: 1000 * 145,
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
