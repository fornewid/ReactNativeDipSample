import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View><Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text></View>
        <View><Text style={styles.text}>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Text></View>
        <Text style={styles.text}>
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </Text><Text style={styles.text}>
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Text><Text style={styles.text}>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </Text><Text style={styles.text}>
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        </Text><Text style={styles.text}>
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  content: {
    padding: 20,
  },
  text: {
    backgroundColor: 'blue',
    fontSize: 42,
    padding: 12,
  },
});

export default App;
