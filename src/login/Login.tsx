import React, {Component} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {setSpText} from '../util/ScreenAuto';
import {useNavigation} from '@react-navigation/core';
// 引入
import {CommonActions} from '@react-navigation/native';

type Props = {
  navigation: any;
};

type State = {};

export default class LoginPage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  state = {};

  jumpHome() {
    // this.navigation.goBack();
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="登录"
          onPress={() => {
            console.log('--------');
            navigation.navigate('HomeIndex');
            // 重置操作
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'HomeIndex'}],
              }),
            );
          }}></Button>

        <Text style={styles.text}>Login Page 你好!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  text: {
    color: '#000',
    fontSize: setSpText(50),
    fontFamily: 'bold',
    textAlign: 'center',
  },
});
