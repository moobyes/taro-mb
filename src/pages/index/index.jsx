import { forwardRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { navigateTo, switchTab, useDidHide, useDidShow, useRouter, getCurrentPages } from '@tarojs/taro';
import styles from  './index.module.scss'; // css modules，推荐使用
import './index.scss' // css, 引入后全局都可以使用，不推荐

function Index(props) {
  const [name, setName] = useState('多端小程序')
  const router = useRouter() // 获取路由
  console.log('首页 :>> ', router, styles, props);
  const init = async () => {
    console.log('请求 数据');
  };
  useEffect(() => {
    setName('好多鱼')
    init();
    // eslint-disable-next-line
  }, []);

  useDidShow(() => {
    console.log('哈哈', getCurrentPages().length)
    console.log('componentDidShow');
  });

  useDidHide(() => {
    console.log('componentDidHide');
  });

  const goToOrderList = () => {
    setName('吃饱了')
    // navigateTo({
    //   url: '/pages/orderList/index',
    // });
    // switchTab({
    //   url: '/pages/orders/index',
    // })
  }
  return (
    <View>
      <Text className={styles.showText}>哈哈</Text>
      <Text className={styles.showText}>{name}</Text>
      <button className='otherText' onClick={goToOrderList}>中文</button>
    </View>
  )
}

export default connect(({ common }) => ({ common }), (dispatch) => {
  return {
    testIncrement: dispatch.count.incrementAsync,
  }
})(Index);