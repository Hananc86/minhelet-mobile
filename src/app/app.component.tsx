import React from 'react';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationLoader, Assets } from './app-loader.component';
import { AppIconsPack } from './app-icons-pack';
import { AppProvider } from './app-provider.component';
import { StatusBar } from '../components/status-bar.component';
import { AppNavigator } from '../navigation/app.navigator';
import { I18nManager } from 'react-native';
import { ApolloClient } from 'apollo-client';
import client from '../services/client';
import { ApolloProvider } from '@apollo/react-hooks';
I18nManager.forceRTL(true);
const assets: Assets = {
  fonts: {
    'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
  },
};

export default (): React.ReactElement => (
  <ApolloProvider client={client}>
    <ApplicationLoader
      assets={assets}
      splash={require('../assets/images/minhelet-logo.png')}>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
      <AppProvider initialTheme='light'>
        <StatusBar/>
        <AppNavigator/>
      </AppProvider>
    </ApplicationLoader>
  </ApolloProvider>
);
