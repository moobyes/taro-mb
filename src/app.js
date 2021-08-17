/*
 * @Description: 入口
 * @Author: Moobye
 * @Date: 2021-07-16 11:50:43
 * @LastEditTime: 2021-08-12 10:35:30
 * @LastEditors: Moobye
 */
import { Provider } from 'react-redux';
import './app.scss'
import store from './store';

function App({children}) {
  return <Provider store={store}>{children}</Provider>;
}

export default App
