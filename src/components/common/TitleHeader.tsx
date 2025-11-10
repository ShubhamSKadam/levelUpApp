import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TitleHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Skill Areas</Text>
      <View style={styles.iconContainer}>
        {/* Search  */}
        <Icon name="search-outline" color={'grey'} size={20} />
        <Icon name="ellipsis-vertical" color={'grey'} size={20} />
      </View>
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
  },
});
