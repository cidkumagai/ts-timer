import {
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
} from '@chakra-ui/react';
import { Fragment, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../app/hooks';
import { changeFlag } from '../meditationSlice';

export const Sound = () => {
    const dispatch = useDispatch()
    const { playFlag, meditations, playType } = useAppSelector(
        (state) => state.meditations
    );
    const [nowTime, setNowTime] = useState(0);
    const soundRef = useRef<HTMLAudioElement>(null);
    const seekRef = useRef<HTMLInputElement>(null);
    if (
        soundRef !== null &&
        soundRef.current !== null &&
        seekRef !== null &&
        seekRef.current !== null
    ) {
        seekRef.current!.value = String(
            Math.floor(soundRef.current.currentTime) * 1000
        );
    }
    const meditation = meditations.filter((item) => item.type === playType);
    if (!playFlag) {
        soundRef.current?.play();
    } else {
        soundRef.current?.pause();
    }

    return (
        <Fragment>
            <audio
                src={meditation[0].sound}
                ref={soundRef}
                onTimeUpdate={(e) => {
                    if (
                        soundRef !== null &&
                        soundRef.current !== null &&
                        seekRef !== null &&
                        seekRef.current !== null
                    ) {
                        setNowTime(
                            Math.floor(e.currentTarget.currentTime) * 1000
                        );
                        if (
                            e.currentTarget.currentTime ===
                            +seekRef.current.value
                        ) {
                            dispatch(changeFlag(false));
                        }
                    }
                }}
            />
            <Slider
                ref={seekRef}
                width={'90%'}
                margin={'0 auto'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                min={0}
                max={meditation[0].time}
                colorScheme='blue'
                value={nowTime}
                onChange={(e) => {
                    soundRef.current!.currentTime = e / 1000;
                }}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
            <Text width={'90%'} margin={'0 auto'}>
                {Math.floor(nowTime / 60000)}:
                {('0' + Math.round((nowTime % 60000) / 1000)).slice(-2)}/
                {Math.floor(meditation[0].time / 60000)}:
                {('0' + Math.floor((meditation[0].time % 60000) / 1000)).slice(
                    -2
                )}
            </Text>
        </Fragment>
    );
};
