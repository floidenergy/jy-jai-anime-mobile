import { Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export const width = screen.width;
export const height = screen.height;
export const w = screen.width / 100;
export const h = screen.height / 100;
export const fontScale = screen.fontScale;
