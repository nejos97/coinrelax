import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Text>Coinrelax</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
