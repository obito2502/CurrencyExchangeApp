import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

const initWidth = 393;
const initHeight = 852;

const maxHeight = screenHeight >= initHeight ? initHeight : screenHeight;

export const resizeHeight = (val: number) => val * (maxHeight / initHeight);
export const resizeWidth = (val: number) => val * (screenWidth / initWidth);
