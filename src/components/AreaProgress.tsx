import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

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

const AreaCard = ({ item, cardWidth }) => {
  return (
    <View style={[styles.mainContainer, { width: cardWidth }]}>
      {/* title container */}
      <View style={styles.titleContainer}>
        <View style={styles.iconContainer}>
          <Icon name="codepen" color={'#34D399'} size={30} />
        </View>
        <Text style={styles.titleText}>{item.areaName}</Text>
      </View>

      {/* Level Container with Progress Bar*/}
      <View style={styles.levelContainer}>
        {/*Level sub container*/}
        <View style={styles.levelSubContainer}>
          <Text style={styles.levelText}>Lv. {item.currentLevel}</Text>
          <Text style={styles.nextLeveText}>
            Next Lv {item.currentLevel + 1}
          </Text>
        </View>

        {/* progress sub container */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressPercentText}> 60 %</Text>
          <Progress.Bar
            progress={0.75}
            width={null}
            height={8}
            color={'#34D399'}
            unfilledColor={'rgba(255, 255, 255, 0.1)'}
            // borderColor={'transparent'}
            borderRadius={10}
          />
        </View>
      </View>
    </View>
  );
};

const AreaProgress = () => {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = screenWidth * 0.85;

  return (
    <View style={{marginHorizontal:12}}>
      <FlatList
        data={areaTestData}
        renderItem={({ item }) => {
          return <AreaCard item={item} cardWidth={cardWidth} />;
        }}
        horizontal={true}
        contentContainerStyle={{
          gap: 15,
        }}
      />
    </View>
  );
};

export default AreaProgress;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    borderColor: '#2F2F2F',
    height: 120,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  titleContainer: {
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  levelSubContainer: {
    width: '35%',
  },
  levelText: {
    fontSize: 20,
    color: 'white',
  },
  nextLeveText: {
    fontSize: 18,
    color: 'grey',
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  progressPercentText: {
    color: '#34D399',
    textAlign: 'right',
    fontSize: 15,
  },
});
