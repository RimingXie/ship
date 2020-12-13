import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Menu, MenuProps } from '../components/Menu/menu'
import { MenuItem, MenuItemProps } from '../components/Menu/menuItem'
import { SubMenu, SubMenuProps } from '../components/Menu/subMenu'
import { action } from '@storybook/addon-actions';


export default {
  title: 'ship-ui/Menu',
  component: Menu,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '设置MenuItem是否为不可用状态',
      table: {
        category: 'MenuItem',
      }
    },
    title: {
      control: 'text',
      description: '设置subItem自定义title',
      table: {
        category: 'SubMenu',
      }
    }
  }

} as Meta;

const defaultMenu: Story<MenuProps & MenuItemProps & SubMenuProps> = (args) => {
  console.log(args)
  return (
    <div style={{ height: 200 }}>
      <Menu {...args} onSelect={action('onClose')}>
        <MenuItem>cool link1</MenuItem>
        <MenuItem disabled={args.disabled}>cool link2</MenuItem>
        <SubMenu title={args.title}>
          <MenuItem >dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>
    </div>

  )
}

export const Info = defaultMenu.bind({})
Info.args = {
  defaultIndex: '0',
  title: 'dropdown'
}