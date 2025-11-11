import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const LimitedStyleInheritance = () => (
  <SafeAreaProvider>
    <SafeAreaView>
      <View>
        <Text>
          Some text
        </Text>
      </View>
      <View>
        <MyAppText>
          Text styled with the default font for the entire application
        </MyAppText>
        <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

const MyAppHeaderText = ({children}) => {
  return (
    <MyAppText>
      <Text style={{fontSize: 20}}>{children}</Text>
    </MyAppText>
  );
};

const MyAppText = ({children}) => {
  return (
    <Text style={{color: 'green', fontStyle: 'italic'}}>{children}</Text>
  );
};

export default LimitedStyleInheritance;
