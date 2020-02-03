import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthScreen } from '../scenes/auth/auth.component';
import { AuthGridScreen } from '../scenes/auth/auth-grid.component';
import { AuthListScreen } from '../scenes/auth/auth-list.component';
import Signin from '../scenes/auth/Signin';
import Signup from '../scenes/auth/Signup';

import ForgotPasswordScreen from '../scenes/auth/forgot-password';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AuthMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <AuthScreen {...props}/>}>
    <TopTab.Screen name='AuthGrid' component={AuthGridScreen}/>
    <TopTab.Screen name='AuthList' component={AuthListScreen}/>
  </TopTab.Navigator>
);

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Auth' component={AuthMenuNavigator}/>
    <Stack.Screen name='Signin' component={Signin}/>
    <Stack.Screen name='Signup' component={Signup}/>
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
  </Stack.Navigator>
);
