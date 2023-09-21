import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  LogBox,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/login/Login';
import SettingPage from './src/page/setting/settingPage';
import Home from './src/home';
import HomeIndex from './src/home/HomeIndex';
import NativeWebpage from './src/page/web/webView';
import 'react-native-reanimated';
import './src/util/Global';

import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();

const config = {
  animation: 'timing',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

LogBox.ignoreAllLogs(true); // 关闭全部黄色警告

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="HomeIndex"
          component={HomeIndex}
          options={{
            title: '首页',
            header: () => <></>,
            headerLeft: () => <></>,
            animation: 'slide_from_right',
            animationDuration: 100,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            title: '登录',
            animation: 'slide_from_right',
            animationDuration: 100,
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 20}}>
                <TouchableOpacity style={{marginHorizontal: 10}}>
                  {/* <Ionicons name="search" size={30} color="#fff" /> */}
                  <Text>设置</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 10}}>
                  <Text>按钮</Text>
                </TouchableOpacity>
              </View>
            ),

            headerTitleStyle: {
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingPage}
          options={{
            animation: 'slide_from_right',
            animationDuration: 100,
            title: '设置',
          }}
        />
        <Stack.Screen
          name="Web"
          component={NativeWebpage}
          options={{
            animation: 'slide_from_right',
            animationDuration: 100,
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
