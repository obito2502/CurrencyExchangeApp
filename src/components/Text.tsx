import { TextProps as RNTextProps, Text as RNText, TextStyle } from 'react-native';
import React, { FC } from 'react';
import Colors from '../provider/Colors';
import resizeFont from '../utils/resizeFont';
import Fonts from '../provider/Fonts';

interface TextProps extends RNTextProps {
  children: string | string[];
  size?: number;
  color?: string;
  weight?: '400' | '500' | '600' | '700';
  style?: TextStyle;
  lineHeight?: number;
}

const Text: FC<TextProps> = ({
  children,
  size = 14,
  color = Colors.black,
  weight = '400',
  style,
  lineHeight,
  ...restProps
}): React.JSX.Element => {
  return (
    <RNText
      style={[
        {
          color,
          fontSize: resizeFont(size),
          fontFamily: Fonts.inter[weight],
          lineHeight: lineHeight ? resizeFont(lineHeight) : undefined,
        },
        style,
      ]}
      {...restProps}
    >
      {children}
    </RNText>
  );
};

export default Text;
