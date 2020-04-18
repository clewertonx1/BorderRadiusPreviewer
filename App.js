import * as React from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Border Radius Previewer</Text>

      <View style={styles.a}>  

        <View style={styles.inputsView}>
          <TextInput style={[styles.input]}></TextInput>         
          <TextInput style={[styles.input]}></TextInput>    
        </View>

        <View style={[styles.form]}></View> 

        <View style={styles.inputsView}>
          <TextInput style={[styles.input]}></TextInput> 
          <TextInput style={[styles.input]}></TextInput> 
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: 'center',
     alignItems: 'center',
    backgroundColor: '#212121',
  },
  title: {
    fontSize: 20,
    justifyContent: 'flex-start',
    textAlign: 'center',
    margin: 10,
    color: '#59dbff',
  },
  form:{
    width: 180,
    height: 180,
    borderWidth: 1,
    borderColor: "#606060", 
  },
  input:{
    margin: 10,
    textAlign: 'center',
    color: 'white',
    width: 40,
    height: 30,
    borderWidth: 1,
    borderColor: "#606060", 
  },
  a:{
    flexDirection: "row",
  },
  inputsView: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
  
  },


});
