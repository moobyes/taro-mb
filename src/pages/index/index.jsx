import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import styles from  './index.module.scss'; // css modules，推荐使用
import './index.scss' // css, 引入后全局都可以使用，不推荐

function Index() {
  const [name, setName] = useState('多端小程序')
  const router = useRouter()
  console.log('router :>> ', router, styles);
  return (
    <View>
      <Text className={styles.showText}>{name}</Text>
      <button className='otherText'>中文</button>
    </View>
  )
}

export default Index;