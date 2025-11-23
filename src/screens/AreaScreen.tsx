import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleHeader from '../components/common/TitleHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal';
import AreaModal from '../components/modal/AreaModal';

const dummyAreaData = [
  {
    name: 'Fitness',
    level: 15,
    totalXP: 300,
    id: 1,
    bgColor: '#C688FC',
  },
  {
    name: 'Programming',
    level: 24,
    totalXP: 234,
    id: 2,
    bgColor: 'orange',
  },
  {
    name: 'Reading',
    level: 11,
    totalXP: 100,
    id: 3,
  },
  {
    name: 'Meditation',
    level: 3,
    totalXP: 201,
    id: 4,
  },
  {
    name: 'Reading',
    level: 11,
    totalXP: 100,
    id: 5,
  },
  {
    name: 'Meditation',
    level: 3,
    totalXP: 201,
    id: 6,
  },
  {
    name: 'Reading',
    level: 11,
    totalXP: 100,
    id: 8,
  },
  {
    name: 'Meditation',
    level: 3,
    totalXP: 201,
    id: 10,
  },
];

const AreaCard = ({ areaData }: any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topSubContainer}>
          <View style={styles.iconContainer}>
            <Icon name="laptop-outline" color={'orange'} size={30} />
          </View>
          {/* Text View */}
          <View>
            <Text style={styles.titleText}>Programming</Text>
            <Text style={styles.subText}>Next Level in 700 XP</Text>
          </View>
        </View>

        {/* Level View */}
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>LVL</Text>
          <Text style={styles.levelNumText}>22</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <Progress.Bar
          progress={0.3}
          color={areaData.bgColor}
          unfilledColor="#56606eff"
          borderWidth={0}
          height={8}
          width={null}
        />
      </View>
    </View>
  );
};

const AreaScreen = () => {
  const [areaData, setAreaData] = useState(dummyAreaData);
  const [isModalVisible,setIsModalVisible] = useState(false);

  const toggleModal = () => {
    console.log(isModalVisible);
    setIsModalVisible((prev) => !prev)
  }

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <SafeAreaView />
        <TitleHeader />

        <View style={styles.listContainer}>
          <FlatList
            data={areaData}
            renderItem={({ item }) => <AreaCard areaData={item} />}
            scrollEnabled={false}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ gap: 8 }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addIcon} onPress={toggleModal}>
        <Icon name={'add-sharp'} size={25} color={'black'} />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible} 
        swipeDirection={'down'}
        onSwipeComplete={()=> setIsModalVisible(false)}
        onBackdropPress={()=>setIsModalVisible(false)}
        style={styles.bottomModal}
      >
        <AreaModal/>
     </Modal>
    </>
  );
};

export default AreaScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#121212',
    flex: 1,
    paddingHorizontal: 15,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  cardContainer: {
    paddingHorizontal: 15,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: '#1B1B1D',
    borderRadius: 25,
    backgroundColor: '#1C1C1E',
  },
  titleText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 500,
  },
  subText: {
    fontSize: 14,
    color: '#A6A6AF',
  },
  levelContainer: {
    alignItems: 'center',
  },
  levelText: {
    color: '#A7A7B0',
  },
  levelNumText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 800,
  },
  progressContainer: {
    width: '90%',
    marginTop: 20,
  },
  listContainer: {
    marginTop: 30,
    marginBottom: 80,
  },
  addIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4285F4',
    padding: 8,
    borderRadius: 50,
    zIndex: 1000,
  },
  bottomModal:{
    justifyContent:"flex-end",
    margin:0
  },
});

