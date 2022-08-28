import { Box, Button, Img } from '@chakra-ui/react';
import { useEffect } from 'react';
import { AiFillCaretRight, AiOutlinePause } from 'react-icons/ai';

import { Sound } from '../components/Sound';
import { changeFlag } from '../meditationSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { IconContext } from 'react-icons';

export const Meditation = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(changeFlag(true));
    }, [dispatch]);
    const { playFlag, meditations, playType } = useAppSelector(
        (state) => state.meditations
    );
    const meditation = meditations.filter((e) => e.type === playType);
    return (
        <Box width={'100%'} height={'100vh'} backgroundColor='gray.700' paddingTop={'50px'}>
            <Box
                margin={'50px auto 0 auto'}
                width={'320px'}
                border={'1px solid black'}
                backgroundColor={'gray.500'}
                color={'white'}
                fontWeight={'bold'}
            >
                <Img
                    src={meditation[0].image}
                    alt='画像'
                    boxSize={'300px'}
                    display={'flex'}
                    justifyContent={'center'}
                    margin={' 0 auto'}
                    objectFit={'contain'}
                />
                <Sound />
                <Button
                    zIndex={3}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    onClick={() => {
                        dispatch(changeFlag(!playFlag));
                    }}
                    margin={'0 auto 20px auto'}
                >
                    {playFlag && (
                        <IconContext.Provider
                            value={{ color: '#2d3748', size: '20px' }}
                        >
                            <AiFillCaretRight />
                        </IconContext.Provider>
                    )}
                    {!playFlag && (
                        <IconContext.Provider
                            value={{ color: '#2d3748', size: '20px' }}
                        >
                            <AiOutlinePause />
                        </IconContext.Provider>
                    )}
                </Button>
            </Box>
        </Box>
    );
};
