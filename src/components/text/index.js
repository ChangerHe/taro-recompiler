import 'weui'
import React from 'react'
import omit from 'omit.js'
import classNames from 'classnames'
import './style/index.scss'
class Text extends React.Component {
  constructor () {
    super(...arguments)
  }

  render () {
    const { className, selectable = false } = this.props
    const cls = classNames(
      'taro-text',
      {
        'taro-text__selectable': selectable
      },
      className
    )
    return (
      <span {...omit(this.props, ['selectable', 'className'])} className={cls}>
        {this.props.children}
      </span>
    )
  }
}

export default Text
