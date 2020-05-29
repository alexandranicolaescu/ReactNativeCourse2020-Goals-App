import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    
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

    <View style = {styles.screen}>
      <View style = {styles.inputContainer}>

        <TextInput 
          placeholder = "Course Goal" 
          style = {styles.input}
        />
        
        <Button title = "Add" />

      </View>

      <View>

      </View>

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
  }
});
