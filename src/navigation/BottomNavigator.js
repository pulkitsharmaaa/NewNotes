import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../screens/Home';
import WebView from '../../screens/webView';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../Images/home.png')}
              style={{height: 24, width: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={WebView}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../Images/info.png')}
              style={{height: 28, width: 28}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;