import React from 'react';
import { Appearance, Button, Text, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF',
        }}>
          <Text
            style={{
              color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
            }}>
              useColorScheme(): {colorScheme}
          </Text>
          <Button
            title="Set to light"
            onPress={() => Appearance.setColorScheme('light')}
          />
          <Button
            title="Set to dark"
            onPress={() => Appearance.setColorScheme('dark')}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
