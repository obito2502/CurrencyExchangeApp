import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { resizeWidth } from '../utils/resizeHelper';
import Colors from '../provider/Colors';

interface RadioButtonProps {
  chosen: boolean;
}

const RadioButton: FC<RadioButtonProps> = ({ chosen }) => {
  return <View style={styles.container}>{chosen && <View style={styles.innerCircle} />}</View>;
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderRadius: resizeWidth(8),
    borderWidth: resizeWidth(1),
    height: resizeWidth(16),
    justifyContent: 'center',
    width: resizeWidth(16),
  },
  innerCircle: {
    backgroundColor: Colors.black,
    borderRadius: resizeWidth(4),
    height: resizeWidth(8),
    width: resizeWidth(8),
  },
});
