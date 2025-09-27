import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import UserStatus from '../components/UserStatus';

const HomeScreen = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      <UserStatus />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black',
  },
});
