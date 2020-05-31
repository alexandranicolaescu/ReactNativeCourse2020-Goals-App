import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: enteredGoal }
    ]);
  };


  return (

    <View style = {styles.screen}>
      <View style = {styles.inputContainer}>

        <TextInput 
          placeholder = "Course Goal" 
          style = {styles.input}
          onChangeText = {goalInputHandler}
          value = {enteredGoal}
        />
        
        <Button 
          title = "Add" 
          onPress = {addGoalHandler}
        />

      </View>

      <FlatList 
        keyExtractor = {(item, index) => item.id}
        data = {courseGoals} 
        renderItem = {itemData =>(
          <View style ={styles.listItem}> 
            <Text> {itemData.item.value} </Text> 
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    padding:50
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },

  input:{
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10 
  },

  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }





  /*<View style={{                    //flex learning thingy
      padding: 50, 
      flexDirection: 'row', 
      width: '80%', 
      height: 300, 
      justifyContent:'space-around', 
      alignItems:'stretch'}}>

      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Text>1</Text>
    
      </View>

      <View
        style={{
          backgroundColor: 'blue',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Text>2</Text>

      </View>

      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Text>3</Text>

      </View>

    </View>
  */
});
