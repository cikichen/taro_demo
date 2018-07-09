import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'


class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/discovery/discovery',
      'pages/more/more',
      'pages/answer/answer',
      'pages/question/question'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'taro知乎',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "主页",
        iconPath: "./asset/images/homepage.png",
        selectedIconPath: "./asset/images/homepage_fill.png"
      },{
        pagePath: "pages/discovery/discovery",
        text: "工具",
        iconPath: "./asset/images/component.png",
        selectedIconPath: "./asset/images/component1.png"
      }, 
      {
        pagePath: "pages/more/more",
        text: "我的",
        iconPath: "./asset/images/user.png",
        selectedIconPath: "./asset/images/user1.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
