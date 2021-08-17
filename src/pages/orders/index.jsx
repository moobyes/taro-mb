import React from 'react';
import { connect } from 'react-redux'
import { View, Text, Button } from '@tarojs/components'
import { navigateTo, switchTab, useDidHide, useDidShow, useRouter, getCurrentPages } from '@tarojs/taro';

function Orders({count, common, add, testIncrement}) {
  const increment = () => {
    console.log('订单11 :>> ', 'router');
    add(11)
    // testIncrement(11)
  }
  console.log('订单 :>> ', 'router');
  return (
    <View className='otherText'>
      <Text>{count}</Text>
      <Button onClick={increment}>加111</Button>
    </View>
  );
}

// export default Orders;

export default connect(({ count, common }) => ({ count, common }), (dispatch) => {
  return {
    add: dispatch.count.increment,
    testIncrement: dispatch.count.incrementAsync,
  }
})(Orders);

