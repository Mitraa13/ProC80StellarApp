import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/Home';
import DailyPicScreens from './Screens/DailyPic';
import SpaceCraftsScreen from './Screens/SpaceCreafts';
import StarMapScreen from './Screens/StarMap';

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false,}}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Daily Pics' component={DailyPicScreens} />
          <Stack.Screen name='Space Crafts' component={SpaceCraftsScreen} />
          <Stack.Screen name='Star Map' component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;
