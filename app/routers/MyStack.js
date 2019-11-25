import {createStackNavigator} from 'react-navigation-stack';
import My from '../pages/My/My';

const MyStack = createStackNavigator(
  {
    My: My,
  },
  {
    initialRouteName: 'My',
  },
);

MyStack.navigationOptions = ({navigation}) => {
  return {
    tabBarLabel: '我的',
  };
};

export default MyStack;
