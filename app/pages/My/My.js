import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

class My extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * 绘制 “我的” 整体页面
   */
  render() {
    return (
      <View>
        <Text>wode</Text>
      </View>
    );
  }
}

export default connect(state => {
  return {...state};
})(withNavigation(My));
