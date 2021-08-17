/*
 * @Description: count
 * @Author: Moobye
 * @Date: 2021-08-10 17:08:00
 * @LastEditTime: 2021-08-11 16:36:19
 * @LastEditors: Moobye
 */
export default {
  state: 0,
  reducers: {
    increment: (state, payload) => {
      return state + payload
    }
  },
  effects: {
    async incrementAsync(payload, rootState) {
      console.log('payload, rootState :>> ', payload, rootState);
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.increment(payload)
    }
  }
}