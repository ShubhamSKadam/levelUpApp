import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

let taskDummyData = [
  {
    title: 'Design the new dashboard UI',
    difficulty: 'Hard',
    area: 'Project Phoenix',
    isComplete: false,
    id: 1,
  },
  {
    title: 'Go for a 30 minute run',
    difficulty: 'Medium',
    area: 'Fitness',
    isComplete: false,
    id: 2,
  },
  {
    title: 'Read one chapter of Atomic Habits',
    difficulty: 'Easy',
    area: 'Learning',
    isComplete: false,
    id: 3,
  },
  {
    title: 'Review team pull requests',
    difficulty: 'Medium',
    area: 'Work',
    isComplete: false,
    id: 4,
  },
  {
    title: 'Solve Leetcode',
    difficulty: 'Hard',
    area: 'Learning',
    isComplete: false,
    id: 5,
  },
  {
    title: 'Learning to Draw',
    difficulty: 'Easy',
    area: 'Drawing',
    isComplete: false,
    id: 6,
  },
  {
    title: 'Solve Discrete Math problems',
    difficulty: 'Hard',
    area: 'Math',
    isComplete: false,
    id: 7,
  },
];

const getViewColor = (difficulty: string) => {
  if (difficulty === 'Easy') {
    return {
      backgroundColor: '#1A3432',
      borderColor: '#1A3833',
    };
  } else if (difficulty === 'Medium') {
    return {
      backgroundColor: '#30352A',
      borderColor: '#3F442F',
    };
  } else {
    return {
      backgroundColor: '#2D272F',
      borderColor: '#2F272F',
    };
  }
};

const getTextColor = (difficulty: string) => {
  if (difficulty === 'Easy') {
    return {
      color: '#4CE484',
    };
  } else if (difficulty === 'Medium') {
    return {
      color: '#F1B805',
    };
  } else {
    return {
      color: '#FD7474',
    };
  }
};

const TaskCard = ({ taskData, toggleCheck }: any) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        toggleCheck(taskData.id);
      }}
      activeOpacity={1}
    >
      <View>
        <Icon
          name={taskData.isComplete ? 'check-box' : 'check-box-outline-blank'}
          color={taskData.isComplete ? '#359EFF' : 'grey'}
          size={30}
        />
      </View>

      <View style={styles.taskDataContainer}>
        <Text
          style={[
            styles.titleText,
            taskData.isComplete ? { textDecorationLine: 'line-through' } : null,
          ]}
        >
          {taskData.title}
        </Text>

        <View style={styles.bottomCardContainer}>
          <View
            style={[
              styles.difficultyContainer,
              getViewColor(taskData.difficulty),
            ]}
          >
            <Text
              style={[styles.difficultyText, getTextColor(taskData.difficulty)]}
            >
              {taskData.difficulty}
            </Text>
          </View>
          <Text style={styles.areaText}>{taskData.area}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TodaysTask = () => {
  const [taskList, setTaskList] = useState(taskDummyData);

  const toggleCheck = (taskId: number) => {
    const updatedTaskList = taskList.map(item => {
      if (item.id === taskId) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    setTaskList(updatedTaskList);
  };

  return (
    <View style={{ marginTop: 25 }}>
      {/* Header */}
      <Text style={styles.headerText}>Today's Quest</Text>

      {/* Task List */}
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <TaskCard taskData={item} toggleCheck={toggleCheck} />
        )}
        contentContainerStyle={{ gap: 12 }}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
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
    marginBottom: 9,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#313A42',
  },
  taskDataContainer: {
    marginLeft: 16,
  },
  titleText: {
    color: 'white',
    fontSize: 15,
  },
  difficultyContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 8,
    marginTop: 4,
  },
  difficultyText: {
    fontSize: 12,
  },
  bottomCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  areaText: {
    color: '#98A8BD',
    fontSize: 11,
  },
});
