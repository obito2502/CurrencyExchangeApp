import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import useRootStore from '../store/useRootStore';
import Colors from '../provider/Colors';
import Text from './Text';
import { resizeHeight } from '../utils/resizeHelper';

const ErrorComponent = () => {
  const { currencyStore } = useRootStore();

  if (!currencyStore.errorResponse) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text size={25} style={styles.errorMessage}>
        {currencyStore.errorResponse?.errorMessage}
      </Text>
      <TouchableOpacity
        style={styles.reloadButton}
        onPress={() => currencyStore.resetErrorResponse()}
      >
        <Text color={Colors.white} size={20} weight="500">
          Try Again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(ErrorComponent);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.9,
  },
  errorMessage: {
    textAlign: 'center',
  },
  reloadButton: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    height: resizeHeight(50),
    justifyContent: 'center',
    width: '100%',
  },
});
