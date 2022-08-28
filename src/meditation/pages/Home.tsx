import { Box, Flex, ListItem, Spacer, Text, UnorderedList } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeType } from '../meditationSlice';

export const Home = () => {
    const dispatch = useAppDispatch();
    const { meditations } = useAppSelector((state) => state.meditations);
    return (
        <Fragment>
            <Box backgroundColor={'gray.700'} color={'white'} width={'100%'} height={'100vh'} fontWeight={'500'} >
                <Text marginLeft={'10px'} paddingTop={'10px'}>音声一覧</Text>
                <UnorderedList listStyleType={'none'}>
                    {meditations &&
                        meditations.map((item, index) => {
                            return (
                                <Link to='/ts-timer/meditation' key={index}>
                                    <ListItem
                                        margin={'10px'}
                                        padding={'10px'}
                                        fontSize={'md'}
                                        border={'2px solid white'}
                                        borderRadius={'10px'}
                                        onClick={() =>
                                            dispatch(changeType(item.type))
                                        }
                                    >
                                        <Flex>
                                            <Text>{item.title}</Text>
                                            <Spacer />
                                            <Text>{item.composer }</Text>
                                        </Flex>
                                    </ListItem>
                                </Link>
                            );
                        })}
                </UnorderedList>
            </Box>
        </Fragment>
    );
};
