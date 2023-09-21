import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {scaleSizeH, setSpText} from '../../util/ScreenAuto';

type Props = {
  navigation: any;
};

type State = {};

export default class SettingPage extends Component<Props, State> {
  state = {};

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Setting Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
