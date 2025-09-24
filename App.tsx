import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
