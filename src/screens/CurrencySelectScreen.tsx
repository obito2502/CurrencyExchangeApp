import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { CurrencySelectScreenProps } from '../types/NavigationTypes';
import ScreenWrapper from '../components/ScreenWrapper';
import useRootStore from '../store/useRootStore';
import CurrenciesList from '../components/currency/CurrenciesList';
import { resizeHeight, screenWidth } from '../utils/resizeHelper';
import TextInput from '../components/TextInput';
import SearchIcon from '../assets/icons/SearchIcon';

const CurrencySelectScreen = ({ navigation, route }: CurrencySelectScreenProps) => {
  const { currencyStore } = useRootStore();
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(currencyStore.currenciesList);

  return (
    <ScreenWrapper header={{ goBack: () => navigation.goBack(), title: 'Currency Select' }}>
      <View style={styles.container}>
        <TextInput
          icon={<SearchIcon />}
          placeholder="USD"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            if (text) {
              setList(
                currencyStore.currenciesList.filter((cur) =>
                  cur.code.toLowerCase().startsWith(text.toLowerCase())
                )
              );
            } else {
              setList(currencyStore.currenciesList);
            }
          }}
        />
        <CurrenciesList type={route.params.type} list={list} />
      </View>
    </ScreenWrapper>
  );
};

export default CurrencySelectScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    marginTop: resizeHeight(20),
    width: screenWidth * 0.9,
  },
});
