import React from 'react'

class CoverView extends React.Component {
  componentDidMount () {
    console.error('H5 暂不支持 CoverView 组件！')
  }

  render () {
    const { ...reset } = this.props
    return <div {...reset}>{this.props.children}</div>
  }
}

class CoverImage extends React.Component {
  componentDidMount () {
    console.error('H5 暂不支持 CoverImage 组件！')
  }

  render () {
    const { ...reset } = this.props
    return <div {...reset}>{this.props.children}</div>
  }
}

export { CoverImage, CoverView }
