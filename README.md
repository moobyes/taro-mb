## 目前完成基础配置：

1. [X] 项目框架搭建
2. [X] request配置
3. [X] 创建pages页面

## TODO, 需要做的还有这些：

1. [X] 创建页面的时候引入
2. [X] 样式的模块化引入
3. [X] react-redux的引入，配合rematch，如何使用请看：[传送门](https://rematch.gitbook.io/handbook/)
4. [ ] 引入UI框架，目前不做引入，如果需要，直接用taroUI即可
5. [ ] 增加一些基础的工具函数
6. [X] 配置husky

## 其他说明

1. 端口：2021
2. H5部分需要配置proxy
3. 样式的使用推荐css module，目前支持scss
4. styles放的是公共样式

## 小程序的配置


| 小程序平台 | 添加配置文件 |
| - | - |
| 微信小程序 | project.config.json |
| 百度小程序 | project.swan.json |
| 字节跳动小程序 | project.tt.json |
| QQ小程序 | project.qq.json |
| 支付宝小程序 | project.alipay.json |

## 如何使用

```bash
git clone 'git仓库'

yarn

# 默认是三个页面，需要增加页面得先在app.config.js里面配置，然后：
yarn run createPage page's name
```
