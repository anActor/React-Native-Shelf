// 引入应用配置
import {AppEnv, AppConfig} from '../../../config/appConfig';
import {createAction, Storage, des, LoadingUtils} from '../../../utils';
import ToastUtils from '../../../utils/ToastUtils';
/**
 * 登录页 Model
 */
const loginModel = {
  namespace: 'login',

  state: {
    hrmUserInfo: {}, //hr 系统中用户信息
    showRealPassword: false,
    // userInfo: null // 全局用户信息
    userInfo: {},
    QRCodeData: {},
  },

  effects: {},

  reducers: {},
};

export default loginModel;
