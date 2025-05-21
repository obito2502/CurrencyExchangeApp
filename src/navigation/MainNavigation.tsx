import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurrencyExchangeScreen from '../screens/CurrencyExchangeScreen';
import CurrencySelectScreen from '../screens/CurrencySelectScreen';
import { MainNavigationParamList } from '../types/NavigationTypes';
import SCREENS from '../enum/SCREENS';

const Stack = createNativeStackNavigator<MainNavigationParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREENS.CURRENCY_EXCHANGE} component={CurrencyExchangeScreen} />
      <Stack.Screen name={SCREENS.CURRENCY_SELECT} component={CurrencySelectScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
