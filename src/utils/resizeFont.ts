import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 393;

export default function resizeFont(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
