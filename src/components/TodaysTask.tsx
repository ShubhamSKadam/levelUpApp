import { StyleSheet, Text, View,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'


const taskData = [
  {
    taskId:0,
    task:"Complete wireframe design",
    Project:"Website Redesign",
  },
  {
    taskId:1,
    task:"Complete wireframe design",
    Project:"Website Redesign",
  },
  {
    taskId:2,
    task:"Complete wireframe design",
    Project:"Website Redesign",
  },
  {
    taskId:3,
    task:"Complete wireframe design",
    Project:"Website Redesign",
  },
];

const TaskCard = ({item}) => {
  return (
  <View style={styles.taskContainer}>
      <Icon  name="check-circle" color={"grey"} size={20}/>
     </View>

  )
}


const TodaysTask = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Today's Task</Text>

       {/* Task List */}
      <View>
        <FlatList
          data={taskData}
          renderItem={({item})=>{
            return (
            <TaskCard item={item}/>
            )
          }}
          keyExtractor={item => item.taskId.toString()}
        />
      </View>
    </View>
  );
};

export default TodaysTask;

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:20,
    marginTop:12,
  },
  headerText:{
    fontSize:20,
    color:'white',
    fontWeight:500,
  },
  taskContainer:{
   flexDirection:'row',
  }

});
