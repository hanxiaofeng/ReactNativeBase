import React, {useLayoutEffect} from 'react';

import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import WebView from 'react-native-webview';
import {screenHeight, screenWidth} from '../../util/ScreenAuto';

// /**
//  * 定义App提供的所有页面路由名称以及参数
//  * 其中 key 为路由跳转时的名称, value 为路由跳转时携带的参数
//  */
// declare type AppParamList = {
//   Home: object | undefined;
// };

const NativeWebpage: React.FC<
  NativeStackScreenProps<AppParamList, 'Home'>
> = props => {
  const {navigation, route} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${route.params?.title}`,
    });
  }, [navigation, route]);

  return (
    <View style={{height: screenHeight()}}>
      <WebView
        source={{uri: route.params?.url}}
        style={{width: '100%', height: '100%'}}
        onShouldStartLoadWithRequest={event => {
          console.log('onShouldStartLoadWithRequest', event);
          return true;
        }}
        setSupportMultipleWindows={false} //This will solve your problem
        javaScriptEnabled={true}
        onLoadStart={event => {
          console.log('onLoadStart', event.nativeEvent);
        }}
        onLoadEnd={event => {
          console.log('onLoadEnd' + event.nativeEvent);
        }}
      />
    </View>
  );
  // }
};
export default NativeWebpage;
