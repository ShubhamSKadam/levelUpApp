import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <AppNavigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
