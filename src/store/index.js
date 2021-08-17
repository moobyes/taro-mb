/*
 * @Description: store
 * @Author: Moobye
 * @Date: 2021-08-10 16:46:50
 * @LastEditTime: 2021-08-11 16:22:55
 * @LastEditors: Moobye
 */
import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import models from './loader';

const loadingPlugin = createLoadingPlugin({ asNumber: true });
const storeConfig = {
  plugins: [loadingPlugin],
  models,
}
const store = init(storeConfig);

export default store;
