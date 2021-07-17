import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import './index.scss'

function Index() {
  const [oyo, setOyo] = useState('OYO')
  const router = useRouter()
  console.log('router :>> ', router);
  return (
    <View>
      <Text>{oyo}</Text>
    </View>
  )
}

export default Index;