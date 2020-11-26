import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Button,TextInput,View,Image, ImageBackground ,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native';

export default function userscreen() {
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
    <View style={styles.container}>
         <Image 
      /*   style={{width:150 , height:150}}
         source={require("./assets/Login.png")} *//>
       <TextInput style={styles.Input} placeholder="Enter your UserName"/>
         <TextInput style={styles.Input} placeholder="Enter your Mobile Number" />
         <TextInput style={styles.Input} placeholder="Enter your Email"/>
         <TextInput style={styles.Input}  placeholder="Enter your Password" />
         <TextInput style={styles.Input}  placeholder="Enter your Confirm Password" />
         <Text></Text>
         <TouchableOpacity style={styles.Btn}>
          <Text style={{color:"white"}}>Sign-up</Text>
         </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Input:{
      
      height:"8%",
        width:"60%",
        padding:14,
        marginTop:14,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:8, 
      },
      
  Btn:{
    padding:16,
    marginTop:16,
    borderWidth:1,
    height:42,
    width:"60%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40,
    backgroundColor:"black",
    alignSelf:"center",
    textAlign:"center"
  },
})