import React from 'react'

class Camera extends React.Component {
  constructor () {
    super(...arguments)
  }

  componentDidMount () {
    console.error('h5 暂不支持 Camera 组件')
  }

  render () {
    return <div />
  }
}

export default Camera
