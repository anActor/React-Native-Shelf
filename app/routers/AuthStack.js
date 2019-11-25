import {createStackNavigator} from 'react-navigation-stack';

import Login from '../pages/Login/Login';
/**
 * 认证授权栈
 */
const AuthStack = createStackNavigator(
  {
    Login: Login,
  },
  {
    headerMode: 'none', //隐藏标题栏
  },
);

export default AuthStack;
