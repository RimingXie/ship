import React, { Children, ReactNode } from 'react';
import RcTabs, { TabPane, TabsProps as RcTabsProps, TabPaneProps } from 'rc-tabs';
import { EditableConfig } from 'rc-tabs/lib/interface';
import classNames from 'classnames';
import Icon from '../Icon';

const prefixCls = "ship-tabs"

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export type SizeType = 'small' | 'middle' | 'large' | undefined;

export type { TabPaneProps };

export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
  /** 页签的基本样式，可选 `line`、`card` `editable-card` 类型 */
  type?: TabsType;
  /** 大小，提供 `large` `default` 和 `small` 三种大小 */
  size?: SizeType;
  /** 是否隐藏加号图标，在 `type="editable-card"` 时有效 */
  hideAdd?: boolean;
  /** 标签居中展示 */
  centered?: boolean;
  /** 自定义添加按钮 */
  addIcon?: React.ReactNode;
  /** 新增和删除页签的回调，在 `type="editable-card"` 时有效 */
  onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
}

/**
 * 选项卡切换组件。
 * 
 * ```js
 * import { Tabs } from 'ship-ui'
 * ```
 */
export function Tabs(props: TabsProps) {
  const { children, type, className, size, onEdit, hideAdd, centered, addIcon, ...orders } = props
  const classes = classNames({
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-card`]: ['card', 'editable-card'].includes(type as string),
    [`${prefixCls}-editable-card`]: type === 'editable-card',
    [`${prefixCls}-centered`]: centered,
  }, className)
  let editable: EditableConfig | undefined;
  if (type === 'editable-card') {
    editable = {
      onEdit: (editType, { key, event }) => {
        onEdit?.(editType === 'add' ? event : key!, editType);
      },
      removeIcon: <Icon icon="times" />,
      addIcon: addIcon || <Icon icon="plus" />,
      showAdd: hideAdd !== true,
    };
  }
  return (
    <RcTabs
      prefixCls={prefixCls}
      className={classes}
      {...orders}
      editable={editable}
      moreIcon={<Icon icon="ellipsis-h" />}
    >
      {children}
    </RcTabs>
  )
}

Tabs.TabPane = TabPane;

export default Tabs;