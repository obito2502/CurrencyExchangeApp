import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import React, { FC } from 'react';
import FastImage from 'react-native-fast-image';
import { CurrencyType } from '../../types/MainTypes';
import Text from '../Text';
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon';
import { resizeHeight, resizeWidth, screenWidth } from '../../utils/resizeHelper';
import Colors from '../../provider/Colors';

interface CurrencyButtonProps extends TouchableOpacityProps {
  chosenCurrency: CurrencyType;
  title: 'From' | 'To';
}

const CurrencyButton: FC<CurrencyButtonProps> = ({ chosenCurrency, title, ...restProps }) => {
  return (
    <View style={styles.container}>
      <Text size={16}>{title}:</Text>
      <TouchableOpacity style={styles.button} {...restProps}>
        <View style={styles.currencyFlagName}>
          <FastImage source={{ uri: chosenCurrency.flagSrc }} style={styles.flagImage} />
          <Text size={16} weight="400">
            {chosenCurrency.code}
          </Text>
        </View>

        <ArrowDownIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.buttonBackground,
    borderRadius: resizeWidth(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: resizeWidth(16),
    paddingVertical: resizeHeight(12),
  },
  container: {
    gap: resizeHeight(8),
    width: screenWidth * 0.36,
  },
  currencyFlagName: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: resizeWidth(8),
  },
  flagImage: {
    borderColor: Colors.black,
    borderRadius: resizeWidth(4),
    borderWidth: resizeWidth(1),
    height: resizeHeight(20),
    width: resizeWidth(30),
  },
});
