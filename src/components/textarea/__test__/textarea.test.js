import React from 'react'
import { renderIntoDocument } from 'nerv-test-utils'
import Textarea from '../index'

describe('Textarea', () => {
  it('render Textarea', () => {
    const component = renderIntoDocument(<Textarea>hello taro</Textarea>)
    const dom = React.findDOMNode(component)
    expect(dom.textContent).toEqual('hello taro')
  })
})
