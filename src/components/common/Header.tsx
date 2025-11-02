import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      {/* User and Logo */}
      <View style={styles.userContainer}>
        <Image
          source={require('../../assets/testUser.jpeg')}
          style={styles.userLogo}
        />
        <Text style={styles.userText}>HungryFox</Text>
      </View>

      {/* Total XP points overall */}
      <View>
        <Text style={styles.xpText}>12,500 XP</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLogo: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  userText: {
    color: 'white',
    fontSize: 17,
    marginLeft: 11,
  },
  xpText: {
    color: '#FFC624',
    fontSize: 14,
  },
});
