import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import useRootStore from '../../store/useRootStore';
import CurrencyListItem from './CurrencyListItem';
import Colors from '../../provider/Colors';
import { resizeHeight, resizeWidth } from '../../utils/resizeHelper';
import { CurrencyChosenType, CurrencyType } from '../../types/MainTypes';

interface CurrenciesListProps {
  type: CurrencyChosenType;
  list: CurrencyType[];
}

const CurrenciesList: FC<CurrenciesListProps> = observer(({ type, list }) => {
  const { currencyStore } = useRootStore();

  const onChoose = (item: CurrencyType) =>
    type === 'from' ? currencyStore.setFromCurrency(item) : currencyStore.setToCurrency(item);

  const currentCode =
    type === 'from' ? currencyStore.fromCurrency?.code : currencyStore.toCurrency?.code;

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => (
        <CurrencyListItem
          item={item}
          chosen={item.code === currentCode}
          onPress={() => onChoose(item)}
        />
      )}
      extraData={currentCode}
      maxToRenderPerBatch={40}
      style={styles.list}
    />
  );
});

export default CurrenciesList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: Colors.listBackground,
    borderRadius: resizeWidth(8),
    marginTop: resizeHeight(16),
  },
});
