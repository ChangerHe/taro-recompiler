import 'weui'
import React from 'react'

class Label extends React.Component {
  constructor () {
    super(...arguments)
  }

  render () {
    const {...reset} = this.props
    return <label {...reset}>{this.props.children}</label>
  }
}

export default Label
