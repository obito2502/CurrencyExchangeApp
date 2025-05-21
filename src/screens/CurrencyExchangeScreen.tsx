import { Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import CurrencyButton from '../components/currency/CurrencyButton';
import DoubleArrowIcon from '../assets/icons/DoubleArrowIcon';
import { resizeHeight, screenWidth } from '../utils/resizeHelper';
import AmountInput from '../components/currency/AmountInput';
import useRootStore from '../store/useRootStore';
import { CurrencyExchangeScreenProps } from '../types/NavigationTypes';
import ScreenWrapper from '../components/ScreenWrapper';
import SCREENS from '../enum/SCREENS';

const CurrencyExchangeScreen = ({ navigation }: CurrencyExchangeScreenProps) => {
  const { currencyStore } = useRootStore();

  return (
    <ScreenWrapper loader={currencyStore.loader} error={currencyStore.errorResponse}>
      <KeyboardAvoidingView style={styles.flex} behavior="padding">
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
          <View style={styles.currencyButtons}>
            <CurrencyButton
              title="From"
              chosenCurrency={currencyStore.fromCurrency}
              onPress={() => navigation.navigate(SCREENS.CURRENCY_SELECT, { type: 'from' })}
            />
            <Pressable style={styles.iconView} onPress={() => currencyStore.currencyExchange()}>
              <DoubleArrowIcon />
            </Pressable>
            <CurrencyButton
              title="To"
              chosenCurrency={currencyStore.toCurrency}
              onPress={() => navigation.navigate(SCREENS.CURRENCY_SELECT, { type: 'to' })}
            />
          </View>

          <AmountInput />
        </Pressable>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default observer(CurrencyExchangeScreen);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    gap: resizeHeight(16),
    justifyContent: 'center',
    width: screenWidth * 0.9,
  },
  currencyButtons: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  iconView: {
    height: resizeHeight(44),
    justifyContent: 'center',
  },
});
