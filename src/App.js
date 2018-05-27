import React from 'react'
import { connect } from 'react-redux';

import { addGun, removeGun, addGunAsync } from "./index.redux";

// 你要state的什么属性放到props里
const mapStateToProps = (state) => {
  return {num: state.counter}
}
// 你要什么方法放到props里, 会自动dispatch
const actionCreate = { addGun, removeGun, addGunAsync }

// 安装babel-plugin-transform-decorators-legacy 插件, connect就可以使用装饰器的写法
// App = connect(mapStateToProps, actionCreate)(App)          原始写法
@connect(mapStateToProps, actionCreate)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天上交</button>
      </div>
    )
  }
}
export default App;