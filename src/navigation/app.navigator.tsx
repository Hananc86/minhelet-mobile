import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { HomeNavigator } from './home.navigator';
import Signup from '../scenes/auth/Signup';
import Singin from '../scenes/auth/Signin';
import { Text } from 'react-native';
import { HomeDrawer } from '../scenes/home/home-drawer.component';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from '@ui-kitten/components';
import Test from '../model/test/test';


const test = ({navigation}) => (
  <>
  <Text>dfgdfg</Text>
  <Button
          size='tiny'
          onPress={() => navigation.navigate('mainFlow')}>
          THEMES
    </Button>
  </>
)

export const SwitchNavigator = createAppContainer(
  createSwitchNavigator({
  signinFlow: createStackNavigator({
    Signup,
    Singin
  }),
  mainFlow: createStackNavigator({
    Test,
    HomeNavigator
  })
})
)

export const AppNavigator = (): React.ReactElement => (
  <NavigationNativeContainer>
    <SwitchNavigator/>
  </NavigationNativeContainer>
);
