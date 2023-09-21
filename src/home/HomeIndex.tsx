import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainPage from './main/mainPage';
import MessagePage from './message/messagePage';
import MinePage from './mine/minePage';
import {scaleSizeH, scaleSizeW, setSpText} from '../util/ScreenAuto';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

/**
 * 使用createMaterialTopTabNavigator实现tab切换，bottom不支持手动左右切换
 */
export default function HomeIndex() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled: true,
          tabBarActiveTintColor: '#000',
          tabBarLabelStyle: {fontSize: setSpText(22)},
          tabBarStyle: {backgroundColor: '#fff',borderTopWidth:1,borderTopColor:'#F5F5F5'},
          tabBarShowIcon: true,
          tabBarBounces: true,
          tabBarIndicator: ({state}) => {
            return <></>;
          },
        }}>
        <Tab.Screen
          name="Home"
          component={MainPage}
          options={{
            tabBarLabel: '首页',
            tabBarLabelStyle: {},
            tabBarBadge: () => {
              return (
                <View>
                  <View
                    style={{
                      backgroundColor: 'red',
                      marginTop: scaleSizeH(15),
                      marginRight: scaleSizeW(25),
                    }}></View>
                </View>
              );
            },
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home-circle"
                color={color}
                size={22}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessagePage}
          options={{
            tabBarLabel: '搜索',
            tabBarLabelStyle: {},
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="magnify" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Mine"
          component={MinePage}
          options={{
            tabBarLabel: '我的',
            tabBarLabelStyle: {},
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>

      {/* <Tab.Navigator>
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
          name="消息"
          component={MessagePage}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
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
      </Tab.Navigator> */}
    </View>
  );
}
