/*
 * @Description: common
 * @Author: Moobye
 * @Date: 2021-08-11 15:21:27
 * @LastEditTime: 2021-08-11 16:48:09
 * @LastEditors: Moobye
 */
import { login } from '../../services/login';

export default {
  state: {
    num: 0,
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: dispatch => ({
    async signIn(payload) {
      const res = await login(payload);
      return res;
    },
    async increment(payload, rootState) {
      this.updateState({
        num: rootState.common.num + 1,
      });
    },
    async dec(payload, rootState) {
      this.updateState({
        num: rootState.common.num - 1,
      });
    },
  }),
};
