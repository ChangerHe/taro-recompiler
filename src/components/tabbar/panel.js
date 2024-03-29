import 'weui'
import React from 'react'
import classNames from 'classnames'
import View from '../view'
export default class TabbarPanel extends React.Component {
  render () {
    const { children, className, ...reset } = this.props
    const cls = classNames('taro-tabbar__panel', className)
    return (
      <View className={cls} {...reset}>
        {children}
      </View>
    )
  }
}
