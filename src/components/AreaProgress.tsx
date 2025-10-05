import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

let areaTestData = [
  {
    areaName: ' Coding',
    currentLevel: 7,
    currentXP: 1500,
  },
  {
    areaName: 'Fitness',
    currentLevel: 3,
    currentXP: 1300,
  },
  {
    areaName: 'Mathematics',
    currentLevel: 10,
    currentXP: 1200,
  },
];

const AreaCard = () => {
  return (
    <View style={styles.mainContainer}>
      {/* title container    */}
      <View style={styles.titleContainer}>
        <Icon name="laptop" size={25} color={'white'} />
        <Text style={styles.titleText}>Coding</Text>
      </View>

      <View style={styles.levelContainer}>
        <Text style={styles.lvText}>Lv. 7</Text>
        <Text style={styles.lvsmallText}>Lv. 8</Text>
      </View>

      <View />

      <View />
    </View>
  );
};

const AreaProgress = () => {
  return (
    <View style={{ flex: 1 }}>
      <AreaCard />
    </View>
  );
};

export default AreaProgress;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: 'white',
  },
  titleText: {
    color: 'white',
    fontSize: 15,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lvText: {
    fontSize: 20,
    color: 'white',
  },
  lvsmallText: {
    fontSize: 18,
    color: 'white',
  },
});
