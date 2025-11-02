import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

const userAreaList = [
  {
    name: 'Coding',
    level: '5',
    xp: '800',
    IconName: 'github',
    bgColor: '#C688FC',
  },
  {
    name: 'Fitness',
    level: '5',
    xp: '800',
    IconName: 'dribbble',
    bgColor: '#4CE383',
  },
  {
    name: 'Math',
    level: '5',
    xp: '800',
    IconName: 'check',
    bgColor: 'yellow',
  },
];

const AreaCard = ({ cardData }: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Icon
          name={cardData.IconName}
          size={30}
          color={'white'}
          style={styles.icon}
        />

        <View style={styles.levelContainer}>
          <Text style={styles.cardText}>{cardData.name}</Text>
          <Text style={[styles.levelText, { color: cardData.bgColor }]}>
            Lv .{cardData.level}
          </Text>
        </View>
      </View>

      {/* Progress container */}
      <View>
        <Progress.Bar
          progress={0.3}
          color={cardData.bgColor}
          unfilledColor="#56606eff"
          borderWidth={0}
          height={8}
        />
      </View>

      <View style={styles.xpContainer}>
        <Text style={styles.xpText}>{cardData.xp}/1000 XP</Text>
      </View>
    </View>
  );
};

const UserAreas = () => {
  return (
    <View>
      <Text style={styles.userAreaText}>Your Areas</Text>
      <FlatList
        data={userAreaList}
        renderItem={({ item }) => <AreaCard cardData={item} />}
        horizontal
        contentContainerStyle={{ gap: 18 }}
      />
    </View>
  );
};

export default UserAreas;

const styles = StyleSheet.create({
  userAreaText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 14,
  },
  iconContainer: {},
  icon: {},
  cardText: {
    color: 'white',
    fontSize: 14,
  },
  levelText: {
    fontSize: 12,
  },
  headingContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  mainContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#392A5E',
  },
  levelContainer: {
    marginLeft: 10,
  },
  xpContainer: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  xpText: {
    color: '#97A7BC',
    fontSize: 10,
  },
});
