import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import SearchBar from './src/screens/SearchBar';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
  SearchScreen,
  SearchBar
}, {
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: 'Minhelet League'
  }
});

export default createAppContainer(navigator);