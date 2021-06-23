import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/Home';
import DailyPicScreens from './Screens/DailyPic';
import SpaceCraftsScreen from './Screens/SpaceCreafts';
import StarMapScreen from './Screens/StarMap';
import IssLocationScreen from "./Screens/IssLocation";
import MeteorScreen from "./Screens/Meteors";
import UpdateScreen from "./Screens/Updates";

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false,}}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Daily Pics' component={DailyPicScreens} />
          <Stack.Screen name='Space Crafts' component={SpaceCraftsScreen} />
          <Stack.Screen name='Star Map' component={StarMapScreen}/>
          <Stack.Screen name='Iss Location' component={IssLocationScreen} />
          <Stack.Screen name='Meteors' component={MeteorScreen} />
          <Stack.Screen name='Updates' component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;
