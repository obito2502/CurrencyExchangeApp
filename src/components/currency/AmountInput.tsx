import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { debounce } from 'lodash';
import TextInput from '../TextInput';
import Text from '../Text';
import useRootStore from '../../store/useRootStore';
import { resizeHeight } from '../../utils/resizeHelper';

const AmountInput = () => {
  const { currencyStore } = useRootStore();
  const [inputAmount, setInputAmount] = useState('');
  const [result, setResult] = useState(0);

  const getConvertedValue = async (receivedAmount: string) => {
    setResult(await currencyStore.getConvertedValue(receivedAmount));
  };

  const handleConvertDebounce = useCallback(debounce(getConvertedValue, 500), []);

  const handleInput = (text: string) => {
    if (text) {
      setInputAmount(text);
      handleConvertDebounce(text);
    } else {
      setResult(0);
      setInputAmount('');
    }
  };

  useEffect(() => {
    setInputAmount('');
    setResult(0);
  }, [currencyStore.fromCurrency, currencyStore.toCurrency]);

  return (
    <View style={styles.container}>
      <Text size={16}>Amount:</Text>
      <TextInput value={inputAmount} onChangeText={handleInput} placeholder="0" />
      <View style={styles.amountView}>
        <Text size={16}>
          {inputAmount || '0'} {currencyStore.fromCurrency?.symbol} =
        </Text>
        <Text size={42}>
          {result.toString()} {currencyStore.toCurrency?.symbol}
        </Text>
      </View>
    </View>
  );
};

export default observer(AmountInput);

const styles = StyleSheet.create({
  amountView: {
    marginTop: resizeHeight(16),
  },
  container: {
    gap: resizeHeight(8),
  },
});
