import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

type Props = {
  name: string;
};

type State = {};

export default class ListItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  state = {
    title: '默认值',
  };

  render() {
    const {name} = this.props;

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text>{this.state.title + '     name:' + name}</Text>
        <Button
          title="点我"
          onPress={() => {
            this.setState({
              title: '改变了的新值~',
            });
          }}></Button>
      </View>
    );
  }
}
