import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {setSpText} from '../../util/ScreenAuto';

type Props = {};

type State = {};

export default class MinePage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mine Page</Text>
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
