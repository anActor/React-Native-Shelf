import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
// import {Storage} from '../utils';
// import {CacheConfigConstants} from '../config/cacheConfigConstants';
/**
 * 登录状态判断页
 */
class AuthLoading extends React.Component {
  constructor() {
    super();
    // this._bootstrapAsync();
  }

  // 从 storage 中获取缓存的用户状态
  // _bootstrapAsync = async () => {
  //   const userInfo = await Storage.get(CacheConfigConstants.user.USER_INFO);
  //   // const { loginSuccess, useridShort } = userInfo;
  //   // if (userInfo) {
  //   //     //存在用户信息
  //   //     const { loginSuccess } = userInfo;
  //   //     // 根据存储的用户信息判断跳转路由栈
  //   //     this.props.navigation.navigate(loginSuccess ? "App" : "Auth");
  //   // }
  //   this.props.navigation.navigate('App');
  // };

  render() {
    return (
      <View style={styles.container}>
         {/*<ActivityIndicator /> */}
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default connect(state => {
  return {...state};
})(withNavigation(AuthLoading));
