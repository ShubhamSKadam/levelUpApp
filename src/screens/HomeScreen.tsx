import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import AreaProgress from '../components/AreaProgress';
import TodaysTask from '../components/TodaysTask';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserDashboardStat from '../components/UserDashboardStat';
import UserAreas from '../components/UserAreas';

const HomeScreen = () => {
  return (
    <View style={styles.mainView}>
      <SafeAreaView />
      <Header />
      <UserDashboardStat />
      <UserAreas />
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
