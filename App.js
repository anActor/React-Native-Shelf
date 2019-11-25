import React from 'react';
import {Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import {create} from 'dva-core';
// import {networkModel} from './app/utils/request';

// 引入所有 dva model
// import models from './app/models';
// 引入入口
import Main from './app/main/Main';

// 创建dva应用
const dvaApp = create();
//
// models.forEach(o => {
//   // 装载models对象
//   dvaApp.model(o);
// });
// dvaApp.model(networkModel);

dvaApp.start(); // 实例初始化

const store = dvaApp._store; // 获取redux的store对象供react-redux使用

export default class Container extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
