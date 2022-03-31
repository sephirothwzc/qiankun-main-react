import actions, { LOGIN_ACTION } from '@/redux/action/app-user';
import store from '@/redux/store';
import { Maybe } from '@/utils/type-helper';

/**
 * 获取 Token
 */
const getToken = (): Maybe<string> => {
  const state = store.getState();
  return state.login.appUser?.token;
};

/**
 * 设置 Token
 */
const setToken = (token: string): void => {
  // 将 token 的值记录在 store 中
  actions[LOGIN_ACTION.LOGIN]({ token });
};

export default { getToken, setToken };
