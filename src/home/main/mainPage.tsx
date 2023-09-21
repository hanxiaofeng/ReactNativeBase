import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {scaleSizeH, scaleSizeW, setSpText} from '../../util/ScreenAuto';
import StatusBarModule from '../../components/Statusbar';
import SplashScreen from 'react-native-splash-screen';

type Props = {
  navigation: any;
};

type State = {};

export default class MainPage extends Component<Props, State> {
  state = {};

  componentDidMount(): void {
    SplashScreen.hide();
  }

  render() {
    const {navigation} = this.props;

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        }}>
        <StatusBarModule isLoading={true} />
        <View style={styles.container}>
          <Text style={{...styles.text}}>Main Page</Text>

          <View style={{flexDirection: 'row'}}>
            <View style={{width: scaleSizeW(180)}}>
              <Button
                title="跳转到设置"
                onPress={() => {
                  navigation.navigate('Setting');
                }}></Button>
            </View>

            <View style={{width: scaleSizeW(180), marginLeft: scaleSizeW(20)}}>
              <Button
                title="访问网页"
                onPress={() => {
                  navigation.navigate('Web', {
                    url: 'https://juejin.cn/',
                    title: 'web浏览111',
                  });
                }}></Button>
            </View>
          </View>

          <Text>我在底部</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: scaleSizeW(20),
  },

  text: {
    color: '#000',
    fontSize: setSpText(50),
    fontFamily: 'bold',
    textAlign: 'center',
    // marginTop: StatusBar.currentHeight,
  },
});
