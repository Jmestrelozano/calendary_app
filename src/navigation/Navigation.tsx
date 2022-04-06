import * as React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { Platform } from 'react-native';
import TaskCalendary from '../views/TaskCalendary';
import Home from '../views/Home';


const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background:Platform.OS === 'ios' ?  'white' :'transparent'
    },
  };

const Navigation =() => {
return(
    <NavigationContainer theme={MyTheme} >
        <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='TaskCalendary' component={TaskCalendary} />
        </Stack.Navigator>
    </NavigationContainer>
)

}
export default  Navigation;
