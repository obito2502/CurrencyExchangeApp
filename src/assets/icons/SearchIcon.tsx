import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../provider/Colors';
import resizeFont from '../../utils/resizeFont';

interface SearchIconProps {
  size?: number;
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ size = 18, color = Colors.black }) => {
  return (
    <Svg width={resizeFont(size)} height={resizeFont(size)} viewBox="0 0 18 19" fill="none">
      <Path
        d="M15.75 16.25l-4.5-4.5M2.25 8a5.25 5.25 0 1010.5 0 5.25 5.25 0 00-10.5 0z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
