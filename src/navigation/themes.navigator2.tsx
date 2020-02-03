import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemesScreen } from '../scenes/themes/themes.component';

const Stack = createStackNavigator();

export const ThemesNavigator2 = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Themes2' component={ThemesScreen}/>
  </Stack.Navigator>
);
