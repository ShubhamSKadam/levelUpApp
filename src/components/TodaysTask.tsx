import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const taskData = [
  {
    taskId: 0,
    task: 'Complete wireframe design',
    project: 'Website Redesign',
    isCompleted: false,
    gains: '15',
  },
  {
    taskId: 1,
    task: 'Solve 2 problems from Trigonometry',
    project: 'Mathematics',
    isCompleted: true,
    gains: '20',
  },
  {
    taskId: 2,
    task: 'Code Levelup App',
    project: 'Programming',
    isCompleted: true,
    gains: '25',
  },
  {
    taskId: 3,
    task: 'Read Atomic Habits',
    project: 'Reading',
    isCompleted: false,
    gains: '10',
  },
];

const TaskCard = ({ item }) => {
  return (
    <View style={styles.taskContainer}>
      {/* check icon  */}
      <View style={styles.taskSubContainer}>
        {item.isCompleted ? (
          <Icon name="check-circle" color={'grey'} size={25} />
        ) : (
          <Icon name="circle" color={'grey'} size={25} />
        )}

        <View style={styles.textContainer}>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode='tail'>
            {item.task}
          </Text>
          <Text style={styles.projectText}>{item.project}</Text>
        </View>
      </View>

      {/* xp container */}
      <View style={styles.gainsContainer}>
        <Text style={styles.gainsText}>{item.gains} xp</Text>
      </View>
    </View>
  );
};

const TodaysTask = () => {

  
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Today's Task</Text>

      {/* Task List */}
      <View>
        <FlatList
          data={taskData}
          renderItem={({ item }) => {
            return <TaskCard item={item} />;
          }}
          keyExtractor={item => item.taskId.toString()}
         contentContainerStyle={{
            gap:"15",
          }} 
        />
      </View>
    </View>
  );
};

export default TodaysTask;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 500,
    marginVertical:18
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskSubContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal:12,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 400,
  },
  projectText: {
    color: 'grey',
    fontSize: 14,
  },
  gainsText: {
    color: 'white',
  },
  gainsContainer: {
    backgroundColor: 'grey',
    paddingHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
  },
});
