import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

// 测试事件
const defaultProps = {
  onClick: jest.fn()
}

// 测试输入数据
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

// 分类测试
describe('test Button component', () => {
  // 应该呈现正确的默认按钮
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument() // 判断组件是否在文档当中
    expect(element.tagName).toEqual('BUTTON') // 判断元素名是否为button
    expect(element).toHaveClass('btn btn-default') // 判断className
    expect(element.disabled).toBeFalsy() // 判断disable是否为false
    fireEvent.click(element) //点击事件
    expect(defaultProps.onClick).toHaveBeenCalled() // 测试defaultProps里面的onClick是否被调用到了
  })

  // 应该根据不同的props渲染正确的组件
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary btn-lg klass')
  })

  // 当btnType等于link并且提供herf时，应该呈现一个链接
  it('should render a link when btnType equals link and herf is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  // 当disabled设置为true时，应该呈现disabled按钮
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled() // 测试defaultProps里面的onClick是否不能被调用
  })
})