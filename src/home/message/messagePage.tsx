import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {setSpText} from '../../util/ScreenAuto';

type Props = {
  navigation: any;
};

type State = {};

export default class MessagePage extends Component<Props, State> {
  state = {};

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Message Page</Text>
        <View>
          <Button
            title="跳转到我的"
            onPress={() => {
              navigation.navigate('Mine');
            }}></Button>
        </View>
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
