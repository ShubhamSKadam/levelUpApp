import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const StatCard = ({ title, value }: any) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const UserDashboardStat = () => {
  return (
    <View style={styles.dashBoardContainer}>
      <StatCard title={'Today'} value={'5'} />
      <StatCard title={'Streak'} value={'12d'} />
      <StatCard title={'Next Lvl'} value={'850'} />
    </View>
  );
};

export default UserDashboardStat;

const styles = StyleSheet.create({
  dashBoardContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 28,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 28,
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: '#1B242E',
    borderWidth: 0.5,
    borderColor: '#56606eff',
  },
  titleText: {
    color: '#9AA9BF',
    fontSize: 14,
  },
  valueText: {
    color: 'white',
    fontSize: 20,
  },
});
