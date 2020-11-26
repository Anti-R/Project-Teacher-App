import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text,Button,TextInput,View,Image, ImageBackground ,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native';

export default class SchoolScreen extends Component{
  render(){
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
    <View style={styles.container}>
       
         <TouchableOpacity style={styles.Btn}
          onPress={()=>{this.props.navigation.navigate('Login')}}>
          <Text style={{color:"white"}}>Teacher</Text>
         </TouchableOpacity>

         
         <TouchableOpacity style={styles.Btn}
          onPress={()=>{this.props.navigation.navigate('School1')}}
         >
          <Text style={{color:"white"}}>Student</Text>
         </TouchableOpacity>
         
         
         <TouchableOpacity style={styles.Btn}>
          <Text style={{color:"white"}}>Admin/panel</Text>
         </TouchableOpacity>
         
      </View>
      </TouchableWithoutFeedback>
  )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    },
      
  Btn:{
    padding:16,
    marginTop:16,
    borderWidth:1,
    height:42,
    width:"40%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40,
    backgroundColor:"black",
    alignSelf:"center",
    textAlign:"center"
  },
})