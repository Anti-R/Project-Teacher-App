import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Text,Button,TextInput,View,Image, ImageBackground ,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native';

export default function Login() {
  const[UserName,setUserName]=useState('');
  const[Password,setPassword]=useState('');
  return (
    
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
    <View style={styles.container}>
  
    
    <Image 
       /*  style={{width:150 , height:150}}
         source={require("./assets/Login.png/Screens")}*/ />
                    
        
         <TextInput style={styles.Input}
         onChangeText={(val)=>setUserName(val)}
         placeholder="Enter your UserName"/>
         <TextInput style={styles.Input} 
         onChangeText={(val)=>setPassword(val)}
         placeholder="Enter your Password" />
         <Text></Text>
         <TouchableOpacity style={styles.Btn}>
          <Text style={{color:"white"}}>Log-in</Text>
         </TouchableOpacity>
         <Text> </Text>
         <Text>Need an Acoount  <Text  style={{ color:"blue"}}
          onPress={()=>{this.props.navigation.navigate('Login')}}>Sign-up</Text></Text>
         
        
      <StatusBar style="auto" />
      
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
  Text:{
    height:100,
    width:200,
    textAlign:"center",
  },
  Input:{
    width:"80%",
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:10, 
  },
  Btn:{
    padding:16,
    marginTop:16,
    borderWidth:1,
    height:42,
    width:"80%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40,
    backgroundColor:"black",
    alignSelf:"center",
    textAlign:"center"
  },
  
});
