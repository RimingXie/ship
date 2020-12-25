import React, { ReactNode } from 'react';
import classNames from 'classnames';
import TimelineItem, { postType, TimelineItemProps } from './timelineItem';
import Icon from '../Icon';

const prefixCls = 'ship-timeline'

export interface TimelineProps extends React.HTMLAttributes<HTMLElement> {
  /** 通过设置 `mode` 可以改变时间轴和内容的相对位置 */
  mode?: 'left' | 'alternate' | 'right';
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending?: boolean | ReactNode;
  /** 当最后一个幽灵节点存在時，指定其时间图点 */
  pendingDot?: ReactNode;
  /** 节点排序 */
  reverse?: boolean;
}

/**
 * 垂直展示的时间流信息。
 * 
 * ```js
 * import { Timeline } from 'ship-ui'
 * ```
 */
export const Timeline: React.FC<TimelineProps> = (props) => {
  const { className, children, pending, pendingDot, reverse, mode, ...others } = props
  let hasLabel = false;
  let ArrayChild = React.Children.toArray(children);
  const len = ArrayChild.length;
  if (reverse) ArrayChild = [...ArrayChild.reverse()]
  const pendingNode = typeof pending === 'boolean' ? null : pending;
  const pendingItem = pending ?
    <TimelineItem pending={!!pending} dot={pendingDot || <Icon icon="spinner" />}>
      {pendingNode}
    </TimelineItem> : null;

  let itemList = ArrayChild.map((child, index) => {
    if (child !== null) {
      const ChildElement = child as React.FunctionComponentElement<TimelineItemProps>;
      const { displayName } = ChildElement.type;
      let post: postType;
      if (mode === 'alternate') {
        (index + 1) % 2 === 0 ? post = 'right' : post = 'left';
      } else {
        post = mode as postType
      }
      if (ChildElement.props.label) {
        hasLabel = true
      }
      if (displayName === 'timelineItem') {
        return React.cloneElement(ChildElement, {
          isLast: len === (index + 1),
          position: mode ? post : undefined
        })
      } else {
        console.error("Warning: Timeline has achild which is not a TimelineItem component")
      }
    }
  })
  if (reverse && pendingItem) {
    itemList.unshift(pendingItem)
  } else if (pendingItem) {
    itemList.push(pendingItem)
  }
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-pending`]: pending,
    [`${prefixCls}-reverse`]: reverse,
    [`${prefixCls}-${mode}`]: mode && !hasLabel,
    [`${prefixCls}-label`]: hasLabel
  })
  return (
    <ul className={classes} {...others}>
      {itemList}
    </ul>
  )
}

export default Timeline;