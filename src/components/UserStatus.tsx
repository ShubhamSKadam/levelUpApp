import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UserStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* Icon */}
        <View style={styles.userIconParent}>
          <View style={styles.userIcon}>
            <Text style={styles.textColor}>Lv {'07'}</Text>{' '}
          </View>
        </View>

        <View style={styles.subTextContainer}>
          <Text style={[styles.textColor, styles.mainText]}>
            Welcome Back, Hunter
          </Text>
          <Text style={styles.textColor}>
            Your status is clear. No anomalies detected.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserStatus;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textColor: {
    color: 'white',
  },
  mainText: {
    fontSize: 20,
    fontWeight: '600',
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  subTextContainer: {},
  userIconParent: {
    borderWidth: 2,
    padding: 5,
    borderColor: '#34D399',
    borderRadius:50,

  },
});
