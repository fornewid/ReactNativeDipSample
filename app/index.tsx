import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

const DisplayAnImageWithStyle = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default DisplayAnImageWithStyle;
