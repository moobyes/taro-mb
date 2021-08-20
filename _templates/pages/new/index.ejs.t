---
to: src/pages/<%= name %>/index.jsx
---
import React from 'react';
import { View } from '@tarojs/components'
import styles from  './index.module.scss';

function <%= name %>(props) {
    return (
      <View>
        <%= name %>
      </View>
    );
}
export default <%= name %>;
