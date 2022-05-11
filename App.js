import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity,Keyboard } from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  let listViewRef;

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    // listViewRef.scrollToEnd({animated: true});

  }
  const completeTask=(index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task!
        </Text>
        <View style={styles.items}>
         
          {
            taskItems.map((item, index) =>{
               return (
                 <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                   <Task  text={item} 
                   />
                 </TouchableOpacity>
               )

            })
          }
        </View>
        <View style={styles.hidden}>

</View>
      </ScrollView>
      
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios"? "padding" :"height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Add new task!"} value={task} onChangeText={text =>setTask(text)}>

        </TextInput>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
    marginBottom:70,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',

  },
  items:{
    marginTop:15,

  },
  hidden:{
    height: 75,

  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
input:{
  paddingVertical:10,
  paddingHorizontal:15,
  backgroundColor:"#ffff",
  borderRadius:50,
  width:"80%",
  borderColor:'#c0c0c0',
  borderWidth:1,
marginLeft:10,
},
addWrapper:{
width:45,
height:45,
backgroundColor:'#fff',
borderRadius:60,
justifyContent:'center',
alignItems:'center',
borderColor:'#c0c0c0',
borderWidth:1,
marginEnd:10,
},
addText:{
fontSize:30,
marginBottom:4,
marginLeft:1
},
});
