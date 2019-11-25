import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>登錄頁面</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({});
export default connect(state => {
  return {...state};
})(withNavigation(Login));
