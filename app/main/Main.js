import React from 'react';
import {TextInput, Text, AppState} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {connect} from 'react-redux';
// import {AppConfig, AppEnv} from '../config/appConfig';

/**
 * 登录状态判断页
 */
import AuthLoading from '../pages/AuthLoading';
/**
 * 认证路由
 */
import AuthStack from '../routers/AuthStack';
/**
 * 应用主路由，含底部导航相关子路由
 */
import AppStack from '../routers/AppStack';

/**
 * 创建并导出默认应用容器
 */
const App = createAppContainer(
  createSwitchNavigator(
    {
      // 登录状态判断页
      // AuthLoading: AuthLoading,
      // 应用主路由
      App: AppStack,
      // 认证路由
      Auth: AuthStack,
    },
    {
      // 配置默认路由为权限验证
      initialRouteName: 'App',
    },
  ),
);

class Main extends React.Component {
  render() {
    return <App />;
  }
}

export default connect(state => {
  return {...state};
})(Main);
