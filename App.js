import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Button,TextInput,View,Image, ImageBackground ,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import SchoolScreen from './Screens/School screen'
import School1 from './Screens/School1'
import SchoolSetting from './Screens/SchoolSetting'
import StudentAffair from './Screens/StudentAffair'
import Pc from './Screens/Pc'
export default function   Apps() {
  const Stack= createStackNavigator();
  return (
    <NavigationContainer>
        
    <Stack.Navigator initialRouteName="SchoolScreen">
  <Stack.Screen name="Login" component={Login}/>
  <Stack.Screen name="Signup" component={Signup}/>
  <Stack.Screen name="SchoolScreen" component={SchoolScreen}/>
  <Stack.Screen name="School1" component={School1}/>
  <Stack.Screen name="SchoolSetting" component={SchoolSetting}/>
  <Stack.Screen name="StudentAffair" component={StudentAffair}/>
  <Stack.Screen name="Pc" component={Pc}/>
  </Stack.Navigator>
  <StatusBar style="auto" />
</NavigationContainer>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    }
  })