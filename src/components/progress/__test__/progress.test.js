import React from 'react'
import { renderIntoDocument } from 'nerv-test-utils'
import Progress from '../index'

describe('Progress', () => {
  it('render Progress', () => {
    const component = renderIntoDocument(
      <Progress percent={20} showInfo strokeWidth={4} active activeColor='#fff' backgroundColor='#333' />
    )
    const dom = React.findDOMNode(component)
    expect(dom.getAttribute('class')).toContain('weui-progress')
  })
})
