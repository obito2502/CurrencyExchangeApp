import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../provider/Colors';

interface ArrowDownIconProps {
  color?: string;
  size?: string;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ color = Colors.black, size = 18 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
      <Path
        d="M5 6.75l4.5 4.5 4.5-4.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowDownIcon;
