import React from 'react'
import { renderIntoDocument } from 'nerv-test-utils'
import Text from '../index'

describe('Text', () => {
  it('render Text', () => {
    const component = renderIntoDocument(<Text>this is Text</Text>)
    const dom = React.findDOMNode(component)
    expect(dom.textContent).toEqual('this is Text')

    const c = renderIntoDocument(<Text>0</Text>)
    const d = React.findDOMNode(c)
    expect(d.textContent).toEqual('0')
  })
})
