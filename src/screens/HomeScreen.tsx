import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserDashboardStat from '../components/UserDashboardStat';
import UserAreas from '../components/UserAreas';
import TodaysTask from '../components/TodaysTask';

const HomeScreen = () => {
  return (
    <View style={styles.mainView}>
      <SafeAreaView />
      <Header />
      <UserDashboardStat />
      <UserAreas />
      <TodaysTask />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 15,
  },
});
