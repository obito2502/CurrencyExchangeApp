import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../provider/Colors';
import resizeFont from '../../utils/resizeFont';

interface ArrowLeftIconProps {
  size?: number;
  color?: string;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ size = 22, color = Colors.black }) => {
  return (
    <Svg width={resizeFont(size)} height={resizeFont(size)} viewBox="0 0 22 22" fill="none">
      <Path
        d="M4.583 11h12.834M4.583 11l5.5 5.5m-5.5-5.5l5.5-5.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
