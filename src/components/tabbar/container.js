import 'weui'
import React from 'react'
import classNames from 'classnames'
import View from '../view'
export default class TabbarContainer extends React.Component {
  render () {
    const { children, className, ...reset } = this.props
    const cls = classNames('taro-tabbar__container', className)
    return (
      <View className={cls} {...reset}>
        {children}
      </View>
    )
  }
}
