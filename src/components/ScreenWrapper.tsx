import React, { FC, ReactNode } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import Colors from '../provider/Colors';
import { ErrorType, HeaderType } from '../types/MainTypes';
import ErrorComponent from './ErrorComponent';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import Text from './Text';
import { resizeHeight, resizeWidth, screenWidth } from '../utils/resizeHelper';

interface ScreenWrapperProps {
  children: ReactNode;
  loader?: boolean;
  error?: ErrorType | null;
  header?: HeaderType;
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({ children, loader = false, error, header }) => {
  const insets = useSafeAreaInsets();

  const handleContent = () => {
    if (error) {
      return <ErrorComponent />;
    }
    if (loader)
      return <ActivityIndicator style={styles.loader} color={Colors.black} size="large" />;
    return children;
  };

  return (
    <SafeAreaView style={styles.root} edges={header ? ['bottom'] : ['top', 'bottom']}>
      {header && (
        <View style={[styles.header, { paddingTop: insets.top }]}>
          {header.goBack && (
            <TouchableOpacity onPress={header.goBack} hitSlop={8}>
              <ArrowLeftIcon />
            </TouchableOpacity>
          )}
          <Text size={20} weight="700" lineHeight={24}>
            {header.title}
          </Text>
        </View>
      )}
      {handleContent()}
    </SafeAreaView>
  );
};

export default observer(ScreenWrapper);

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    gap: resizeWidth(12),
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: resizeHeight(16),
  },
  loader: {
    alignSelf: 'center',
    flex: 1,
  },
  root: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});
