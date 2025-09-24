import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.mainHeaderContainer}>
      <View style={styles.headerTextContainer}>
        {/* Header Text */}
        <Text style={styles.headerText}>Level Up Tasks</Text>
        <Text style={styles.headerSubText}>Let's be Productive</Text>
      </View>

      <View>
        {/* Icon */}
        <Icon name="user" size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubText: {
    color: 'gray',
    fontSize: 14,
  },
});
