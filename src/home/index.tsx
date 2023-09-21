import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from './main/mainPage';
import MessagePage from './message/messagePage';
import MinePage from './mine/minePage';
import {setSpText} from '../util/ScreenAuto';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator>
        <Tab.Screen
          name="首页"
          component={MainPage}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              backgroundColor: '#fff',
            },
            headerStyle: {
              // backgroundColor: '#a86',
            },
            headerLeft: () => <View></View>,
            tabBarLabelStyle: {
              // fontSize: setSpText(20),
              // color: '#333',
            },
            tabBarAllowFontScaling: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="搜索"
          component={MessagePage}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="我的"
          component={MinePage}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
