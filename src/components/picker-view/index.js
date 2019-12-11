import React from 'react'

class PickerView extends React.Component {
  componentDidMount () {
    console.error('H5 暂不支持 PickerView 组件！')
  }

  render () {
    const { ...reset } = this.props
    return <div {...reset}>{this.props.children}</div>
  }
}

export default PickerView
