import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC, memo } from 'react';
import FastImage from 'react-native-fast-image';
import { CurrencyType } from '../../types/MainTypes';
import Text from '../Text';
import { resizeHeight, resizeWidth, screenWidth } from '../../utils/resizeHelper';
import Colors from '../../provider/Colors';
import RadioButton from '../RadioButton';

interface CurrencyListItemProps {
  item: CurrencyType;
  onPress: () => void;
  chosen: boolean;
}

const CurrencyListItem: FC<CurrencyListItemProps> = ({ item, onPress, chosen }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, chosen && styles.chosenCurrency]}>
      <View style={styles.flagNameView}>
        <FastImage style={styles.flagImage} source={{ uri: item.flagSrc }} />
        <Text size={16} style={styles.currencyName}>
          {item.code} – {item.name}
        </Text>
      </View>
      <RadioButton chosen={chosen} />
    </TouchableOpacity>
  );
};

export default memo(CurrencyListItem, (prev, next) => prev.chosen === next.chosen);

const styles = StyleSheet.create({
  chosenCurrency: {
    backgroundColor: Colors.buttonBackground,
  },
  container: {
    borderRadius: resizeWidth(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: resizeHeight(16),
  },
  currencyName: {
    width: '85%',
  },
  flagImage: {
    borderColor: Colors.black,
    borderRadius: resizeWidth(4),
    borderWidth: resizeWidth(1),
    height: resizeHeight(20),
    width: resizeWidth(30),
  },
  flagNameView: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: resizeWidth(8),
  },
});
