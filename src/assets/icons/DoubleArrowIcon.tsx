import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../provider/Colors';

interface DoubleArrowIconProps {
  color?: string;
  size?: number;
}

const DoubleArrowIcon: React.FC<DoubleArrowIconProps> = ({
  color = Colors.black,
  size = 18,
}): React.JSX.Element => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
      <Path
        d="M16.25 12.75H2.75m13.5 0L14 15m2.25-2.25L14 10.5m-9-3L2.75 5.25m0 0L5 3M2.75 5.25h13.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DoubleArrowIcon;
