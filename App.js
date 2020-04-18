import * as React from 'react';
import { useState } from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Clipboard  } from 'react-native';


export default function App() {

  const [borderTopLeft, setBorderTopLeft] = useState(0)
  const [borderTopRight, setBorderTopRight] = useState(0)
  const [borderBottomRight, setBorderBottomRight] = useState(0)
  const [borderBottomLeft, setBorderBottomLeft] = useState(0)

  return (
    <View style={styles.container}>
      {/* Title*/}
      <Text style={styles.title}>Border Radius Previewer</Text>
      {/*Form and inputs*/}  
      <View style={{margin: 20, flexDirection: "row"}}>  

        {/* Input View Left*/}
        <View style={styles.inputView}>
          <TextInput 
            style={styles.input} keyboardType={'numeric'} 
            onChangeText={text =>  text ? setBorderTopLeft(parseInt(text)) : console.log("value invalid")}>
          </TextInput>
          <TextInput 
            style={styles.input} keyboardType={'numeric'} 
            onChangeText={text =>  text ? setBorderBottomLeft(parseInt(text)) : console.log("value invalid")}>
          </TextInput>
        </View>

        {/* Form square*/}
        <View style={[styles.form, {borderTopRightRadius: borderTopRight, borderTopLeftRadius: borderTopLeft, borderBottomRightRadius: borderBottomRight, borderBottomLeftRadius: borderBottomLeft }]}/>
        
         {/* Input View Right*/}
        <View style={styles.inputView}>
        <TextInput 
            style={styles.input} keyboardType={'numeric'}  
            onChangeText={text =>  text ? setBorderTopRight(parseInt(text)) : console.log("value invalid")}>
          </TextInput>

          <TextInput 
            style={styles.input} keyboardType={'numeric'} 
            onChangeText={text =>  text ? setBorderBottomRight(parseInt(text)) : console.log("value invalid")}>
          </TextInput>
        </View>
      </View>
      {/* Button to copy to clipboard*/}
      <TouchableOpacity style={styles.button} 
        onPress={() => { 
          Clipboard.setString(
            'borderTopLeftRadius: ' + borderTopLeft 
            + ', borderBottomLeftRadius: ' + borderBottomLeft 
            + ', borderTopRightRadius: ' + borderTopRight 
            + ', borderBottomRightRadius: ' + borderBottomRight)
          alert("Copied to clipboard")
        }}> 
        <Text>Copy to clipborad</Text>
      </TouchableOpacity>
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
  inputView: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
  
  },
  button:{ 
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#59dbff',
    width: 140,
    height:30,
    borderRadius: 10,
  }


});
