import React from 'react';
import { cleanup, fireEvent, render, RenderResult, wait } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
          drop1
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}

// 创建测试样式表
const createStyleFile = () => {
  const cssFile: string = `
    .submenu {
      display: none;
    }
    .submenu.menu-opened{
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}



// 测试菜单和菜单项组件
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile()) //添加测试样式表
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  // 应根据默认props呈现正确的菜单和菜单项
  it('shoule render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4) // 只获取第一级li节点
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  // 单击项应更改为活动状态并调用正确的回调
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2') // 检测onSelect是否被调用了，并且参数是2
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active') // disabled的元素被点击时，is-active的classname不应该被添加到元素中
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1') // disabled的元素点击的时候onSelect方法不应该被调用到 
  })
  // mode”设置为“vertical”时应呈现vertical模式
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup() // 手动清除缓存，否则有getByTestId的冲突
    const wrapper = render(generateMenu(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })

  // 当鼠标悬停在子菜单subMenu上时应该显示下拉项
  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible() // 由于节点有可能是display：none，用getByText有可能会获取失败，queryByText返回documentElement或者null
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    // 由于hover方法有300毫秒的动画预留时间，节点不会马上添加到dom上，使用wait方法等待节点插入到dom
    await wait(() => {
      expect(wrapper.queryByText('drop1')).toBeValid()
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).not.toBeValid()
    })
  })
})