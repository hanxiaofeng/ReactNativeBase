import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';

export default class StatusBarModule extends Component {
  static defaultProps = {
    isLoading: false,
  };
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <StatusBar
        animated={true} //是否动画
        hidden={false} //是否隐藏状态栏
        backgroundColor={'transparent'} //android 设置状态栏背景颜色
        // backgroundColor={"#000"}//android 设置状态栏背景颜色
        // translucent={false}//android 沉浸式状态栏
        translucent={true} //android 沉浸式状态栏
        showHideTransition="fade" //IOS状态栏改变时动画 fade:默认 slide
        networkActivityIndicatorVisible={this.props.isLoading} //IOS设定网络活动指示器(就是那个菊花)是否显示在状态栏。
        // statusBarStyle={"default"}//状态栏样式 default	默认（IOS为白底黑字、Android为黑底白字）
        barStyle={'dark-content'} // 状态栏文本的颜色。
        // barStyle={"default"}// 状态栏文本的颜色。
      />
    );
  }
}
