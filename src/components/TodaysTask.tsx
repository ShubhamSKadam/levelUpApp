import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const taskDummyData = [
  {
    title: 'Design the new dashboard UI',
    difficulty: 'Hard',
    area: 'Project Phoenix',
  },
  {
    title: 'Go for a 30 minute run',
    difficulty: 'Medium',
    area: 'Fitness',
  },
  {
    title: 'Read one chapter of Atomic Habits',
    difficulty: 'Easy',
    area: 'Learning',
  },
  {
    title: 'Review team pull requests',
    difficulty: 'Medium',
    area: 'Work',
  },
];

const TaskCard = ({ taskData }) => {
  return (
    <View>
      <View>
        <Icon name="check-box-outline-blank" color="white" size={30} />
      </View>

      <View>
        <Text style={{ color: 'white' }}>{taskData.title}</Text>

        <View>
          <Text>{taskData.difficulty}</Text>
        </View>
        <Text>{taskData.area}</Text>
      </View>
    </View>
  );
};

const TodaysTask = () => {
  return (
    <View>
      {/* Header */}
      <Text style={styles.headerText}>Today's Quest</Text>

      {/* Task List */}
      <FlatList
        data={taskDummyData}
        renderItem={({ item }) => <TaskCard taskData={item} />}
      />
    </View>
  );
};

export default TodaysTask;

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
