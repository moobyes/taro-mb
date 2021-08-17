/*
 * @Description: loader
 * @Author: Moobye
 * @Date: 2021-08-11 15:21:57
 * @LastEditTime: 2021-08-11 18:07:17
 * @LastEditors: Moobye
 */
const files = require.context('./models', false, /\.(js)$/);
const models = {};
files.keys().forEach(key => {
  const filename = key.replace(/(\.\/|\.(js))/g, '');
  models[filename] = files(key).default;
});

export default models;
