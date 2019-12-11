import React from 'react'

class OpenData extends React.Component {
  componentDidMount () {
    console.error('H5 暂不支持 OpenData 组件！')
  }

  render () {
    const { ...reset } = this.props
    return <div {...reset}>{this.props.children}</div>
  }
}

export default OpenData
