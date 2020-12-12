import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { AlertType, AlertProps } from './alert'

const testProps: AlertProps = {
  message: 'Default Text',
  type: AlertType.Success,
  description: 'this is description',
  className: 'klass',
  closable: true,
  closeText: 'close',
  onClose: jest.fn()
}

describe('tset Alert component', () => {
  test('should render the correct info Alert', () => {
    const wrapper = render(<Alert message="Info Text" />)
    const element = wrapper.getByText('Info Text');
    expect(element).toBeInTheDocument()
    expect(element.parentElement?.tagName).toEqual('DIV')
    expect(element.parentElement).toHaveClass('alert alert-info')
  });

  test('default props and the close alert', () => {
    const wrapper = render(<Alert {...testProps} />)
    const element = wrapper.getByText('Default Text');
    expect(element.parentElement).toHaveClass('alert alert-success klass')
    const description = wrapper.getByText('this is description')
    expect(description).toBeInTheDocument()
    const closeBtn = wrapper.getByText('close')
    expect(closeBtn).toBeInTheDocument()
    fireEvent.click(closeBtn)
  })
})
