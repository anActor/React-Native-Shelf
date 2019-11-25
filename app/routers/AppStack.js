import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {connect} from 'react-redux';

import MyStack from './MyStack';

const TabNavigation = createBottomTabNavigator(
  {
    My: MyStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch (routeName) {
          case 'My':
            iconName = focused
              ? require('../images/icons/tab_my_selected.png')
              : require('../images/icons/tab_my_normal.png');
            return (
              <View style={styles.tabItem}>
                <Image source={iconName} />
                <Text style={{color: tintColor, marginLeft: 5}}>我的</Text>
              </View>
            );
          case 'Mys':
            iconName = focused
              ? require('../images/icons/tab_my_selected.png')
              : require('../images/icons/tab_my_normal.png');
            return (
              <View style={styles.tabItem}>
                <Image source={iconName} />
                <Text style={{color: tintColor, marginLeft: 5}}>我的s</Text>
              </View>
            );
        }
      },
      tabBarOnPress: params => {
        // console.log("tabBarOnPress params = ", params);
        // 当为占位 empty 栈 则 不执行event
        if (params.navigation.state.routeName === 'Empty') {
          return params;
        }
        params.defaultHandler();
        return params;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#252525',
      inactiveTintColor: '#94929f',
      showLabel: false,
    },
  },
);

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // width: 100,
    minWidth: 80,
    // backgroundColor: "red",
    alignItems: 'center',
  },
});

export default connect(state => {
  return {...state};
})(TabNavigation);
