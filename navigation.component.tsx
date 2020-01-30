// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { HomeScreen } from './home.component';
// import { DetailsScreen } from './details.component';
// import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';



// export const BottomNavigationWithoutIndicatorShowcase = () => {

//   const [selectedIndex, setSelectedIndex] = React.useState(0);

//   return (
//     <BottomNavigation
//       appearance='noIndicator'
//       selectedIndex={selectedIndex}
//       onSelect={setSelectedIndex}>
//       <BottomNavigationTab title='USERS'/>
//       <BottomNavigationTab title='ORDERS'/>
//       <BottomNavigationTab title='TRANSACTIONS'/>
//     </BottomNavigation>
//   );
// };
// const HomeNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// }, {
//   headerMode: 'none',
// });

// export const AppNavigator = createAppContainer(HomeNavigator);


// // const switchNavigator = createSwitchNavigator({
// //   loginFlow: createStackNavigator({
// //     Home: HomeScreen,
// //     Details: DetailsScreen,
// //   }),
// //   mainFlow: createBottomTabNavigator({
// //     Details: DetailsScreen,
// //   })
// // })
import React from 'react';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { HomeScreen } from './home.component';
import { StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';
// React Navigation also requires installing additional dependencies:
//
// npm i react-navigation react-navigation-tabs react-native-reanimated react-native-gesture-handler
//
// Then install it for ios:
//
// cd ios && pod install

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

// const TabBarComponent = ({ navigation }) => {

//   const onSelect = (index) => {
//     const selectedTabRoute = navigation.state.routes[index];
//     navigation.navigate(selectedTabRoute.routeName);
//   };

//   return (
//     <SafeAreaView>
//       <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
//         <BottomNavigationTab title='USERS'/>
//         <BottomNavigationTab title='ORDERS'/>
//       </BottomNavigation>
//     </SafeAreaView>
//   );
// };


/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kittnpm i @ui-kitten/eva-icons react-native-svgen/docs/guides/icon-packages
 */




const PersonIcon = (style) => (
  <Icon {...style} name='person-outline'/>
);

const BellIcon = (style) => (
  <Icon {...style} name='bell-outline'/>
);

const EmailIcon = (style) => (
  <Icon {...style} name='email-outline'/>
);

export const BottomNavigationWithIconsShowcase = () => {

  const [topSelectedIndex, setTopSelectedIndex] = React.useState(0);
  const [bottomSelectedIndex, setBottomSelectedIndex] = React.useState(0);

  return (
    <Layout>
      <BottomNavigation
        style={styles.bottomNavigation}
        selectedIndex={bottomSelectedIndex}
        onSelect={setBottomSelectedIndex}>
        <BottomNavigationTab title='USERS' icon={PersonIcon}/>
        <BottomNavigationTab title='ORDERS' icon={BellIcon}/>
        <BottomNavigationTab title='TRANSACTIONS' icon={EmailIcon}/>
      </BottomNavigation>

    </Layout>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});

const TabNavigator = createBottomTabNavigator({
  Users: UsersScreen,
  Orders: OrdersScreen,
}, {
  tabBarComponent: BottomNavigationWithIconsShowcase,
});

export const AppNavigator = createAppContainer(TabNavigator);