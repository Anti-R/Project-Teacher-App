import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text,Button,TextInput,View,Image, ImageBackground ,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native';

export default class SchoolScreen extends Component{
  render(){
  return (
   
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
    
    
    <ImageBackground  style={styles.container} source={require("./Welcome.jpg")}>
      <View style={styles.inner}  >
        
         <TouchableOpacity style={styles.Btn}
          onPress={()=>{this.props.navigation.navigate('SchoolSetting')}}>
          <Text style={{color:"white"}}>Enroll course</Text>
         </TouchableOpacity>

         
         <TouchableOpacity style={styles.Btn}
          onPress={()=>{this.props.navigation.navigate('Pc')}}
         >
          <Text style={{color:"white"}}>ITCP</Text>
         </TouchableOpacity>
         
         
         <TouchableOpacity style={styles.Btn}
         onPress={()=>{this.props.navigation.navigate('Pc')}}
         >
          <Text style={{color:"white"}}>Data Structure</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.Btn}
         onPress={()=>{this.props.navigation.navigate('Pc')}}
         >
          <Text style={{color:"white"}}>English</Text>
         </TouchableOpacity>
         
         </View>
         </ImageBackground>
     
      
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
      inner:{
       width:"80%",
       height:"80%",
       opacity: 0.5,
       backgroundColor:'rgba(255, 255, 255,7)',
       justifyContent:"center",
       alignItems:"center"
      },
  Btn:{
    padding:16,
    marginTop:16,
    borderWidth:1,
    height:42,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40,
    opacity:1,
    backgroundColor:"black",
    alignSelf:"center",
    textAlign:"center"
  },
})