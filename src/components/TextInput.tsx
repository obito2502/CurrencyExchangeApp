import {
  StyleSheet,
  View,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, { FC } from 'react';
import Colors from '../provider/Colors';
import { resizeHeight, resizeWidth, screenWidth } from '../utils/resizeHelper';
import resizeFont from '../utils/resizeFont';
import Fonts from '../provider/Fonts';

interface TextInputProps extends RNTextInputProps {
  icon?: React.JSX.Element;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

const TextInput: FC<TextInputProps> = ({ icon, style, inputStyle, ...restProps }) => {
  return (
    <View style={[styles.container, style]}>
      {icon}
      <RNTextInput
        {...restProps}
        style={[styles.input, inputStyle]}
        placeholderTextColor={Colors.placeholder}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderRadius: 8,
    borderWidth: resizeWidth(1),
    flexDirection: 'row',
    gap: resizeWidth(8),
    paddingHorizontal: resizeWidth(16),
    paddingVertical: resizeHeight(12),
    width: screenWidth * 0.9,
  },
  input: {
    color: Colors.black,
    flexGrow: 1,
    fontFamily: Fonts.inter[400],
    fontSize: resizeFont(16),
  },
});
