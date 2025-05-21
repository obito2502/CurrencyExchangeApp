import { ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../provider/Colors';

const LoaderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={Colors.black} size="large" />
    </SafeAreaView>
  );
};

export default LoaderScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
  },
});
