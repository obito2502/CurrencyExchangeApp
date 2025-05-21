import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from '../enum/SCREENS';

// MAIN NAVIGATION
export type MainNavigationParamList = {
  CURRENCY_SELECT: { type: 'from' | 'to' };
  CURRENCY_EXCHANGE: undefined;
};

export type CurrencySelectScreenProps = NativeStackScreenProps<
  MainNavigationParamList,
  SCREENS.CURRENCY_SELECT
>;

export type CurrencyExchangeScreenProps = NativeStackScreenProps<
  MainNavigationParamList,
  SCREENS.CURRENCY_EXCHANGE
>;
