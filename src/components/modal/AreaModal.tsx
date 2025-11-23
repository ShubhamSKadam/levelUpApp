import { StyleSheet, Text, View ,TextInput} from 'react-native'

const AreaModal = () => {
  return (
    <View style={styles.subBottomContainer}>
      
      {/* Area Name */}
      <View>
        <Text>Area Name</Text>
        <TextInput placeholder='e.g Fitness, Programming, Reading'/>
      </View>

{/* Description*/}
      <View>
        <Text>Description (Optional)</Text>
        <TextInput
          placeholder='A short description of your new skill area'
        />
      </View>
    </View> 
  )
}

export default AreaModal;

const styles = StyleSheet.create({
  subBottomContainer:{
    height:700,
    backgroundColor:'white'
  }
})
