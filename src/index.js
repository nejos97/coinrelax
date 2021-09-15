import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  ThemeProvider,
  Header,
  Button,
  Icon,
  Div,
  Text,
} from 'react-native-magnus';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Header py={10}>
          <Text fontWeight="bold" fontSize="2xl">
            Coinrelax
          </Text>
        </Header>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
