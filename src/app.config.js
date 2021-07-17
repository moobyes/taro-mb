export default {
  pages: [
    'pages/index/index',
    'pages/orders/index',
    'pages/personalInfo/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#FF444B',
    color: '#C0C0C0',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        selectedIconPath: './assets/images/home-checked.png',
        iconPath: './assets/images/home-default.png'
      },
      {
        pagePath: 'pages/orders/index',
        text: '订单',
        selectedIconPath: './assets/images/orders-checked.png',
        iconPath: './assets/images/orders-default.png'
      },
      {
        pagePath: 'pages/personalInfo/index',
        text: '我的',
        selectedIconPath: './assets/images/me-checked.png',
        iconPath: './assets/images/me-default.png'
      }
    ]
  },
}
